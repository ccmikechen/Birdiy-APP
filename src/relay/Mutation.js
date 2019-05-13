/* eslint-disable no-param-reassign */

import { commitMutation } from 'react-relay';
import validate from 'validate.js';

import environment from './environment';
import authEnvironment from './authEnvironment';
import { FormFile } from '../helpers/formFile';
import { parseError } from '../errors';

export class MutationValidationError extends Error {
  constructor(message, object) {
    super(message);
    this.object = object;
  }
}

export default class Mutation {
  static defaultInput = {};

  static constraints = {};

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
    this.validated = false;
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

  isValid = () => {
    this.validate();

    return !this.errors;
  };

  errors = () => {
    this.validate();

    return this.errors;
  };

  validate = () => {
    if (this.validated) {
      return;
    }
    this.errors = validate(this.input, this.constructor.constraints);
    this.validated = true;
  };

  getMutationConfig() {
    return this.constructor.mutationConfig;
  }

  setHook = (obj) => {
    this.hookObject = obj;

    return this;
  };

  commit = () => {
    const { mutation, inputName, auth } = this.constructor;

    if (!this.isValid()) {
      const fullMessage = Object.keys(this.errors).map(k => (
        this.errors[k].join(', ')
      ));
      const error = new MutationValidationError(fullMessage, this.errors);

      return Promise.reject(error);
    }

    if (!mutation) {
      return Promise.reject(new Error(`The mutation of ${this.constructor.name} is undefined`));
    }

    const mutationConfig = this.getMutationConfig();
    if (this.hookObject) {
      this.hookObject.on();
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
