/* eslint-disable no-param-reassign */

import { commitMutation } from 'react-relay';

import environment from './environment';
import authEnvironment from './authEnvironment';
import { FormFile } from '../helpers/formFile';
import { parseError } from '../errors';

export default class Mutation {
  static defaultInput = {};

  static mutation = undefined;

  static inputName = 'input';

  static mutationConfig = {};

  static auth = true;

  constructor(input) {
    const { defaultInput } = this.constructor;

    this.input = {
      ...defaultInput,
      ...input,
    };
    this.uploadables = {};
    this.fileCounter = 1;
    this.generateUploadables(this.input);
  }

  generateUploadables = (input) => {
    const keys = Object.keys(input);

    return keys.forEach((key) => {
      if (!input[key] || typeof input[key] !== 'object') {
        return;
      }
      if (input[key] instanceof FormFile) {
        const fileName = `file-${this.fileCounter}`;
        this.fileCounter += 1;
        this.uploadables[fileName] = input[key].getFormData();
        input[key] = fileName;

        return;
      }
      this.generateUploadables(input[key]);
    });
  };

  getMutationConfig() {
    return this.constructor.mutationConfig;
  }

  setHook = (obj, ...args) => {
    this.hookObject = obj;
    this.hookArgs = args;

    return this;
  };

  commit = () => {
    const { mutation, inputName, auth } = this.constructor;

    if (!mutation) {
      return Promise.reject(new Error(`The mutation of ${this.constructor.name} is undefined`));
    }

    const mutationConfig = this.getMutationConfig();
    if (this.hookObject) {
      this.hookObject.on(...this.hookArgs);
    }

    return new Promise((resolve, reject) => commitMutation(
      auth ? authEnvironment : environment,
      {
        mutation,
        ...mutationConfig,
        variables: {
          [inputName]: {
            ...this.input,
          },
        },
        uploadables: this.uploadables,
        onCompleted: (response, errors) => {
          if (this.hookObject) {
            this.hookObject.off();
          }
          const parsedError = errors && parseError(errors[0]);

          if (parsedError) {
            return reject(parsedError);
          }

          return resolve(response);
        },
        onError: (error) => {
          if (this.hookObject) {
            this.hookObject.off();
          }
          reject(parseError(error));
        },
      },
    ));
  };
}
