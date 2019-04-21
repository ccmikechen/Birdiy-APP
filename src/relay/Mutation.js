import { commitMutation } from 'react-relay';
import validate from 'validate.js';

import environment from './environment';

class MutationValidationError extends Error {
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

  constructor(input) {
    const { defaultInput } = this.constructor;

    this.input = Object.freeze({
      ...defaultInput,
      ...input,
    });
    this.validated = false;
  }

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

  commit = () => {
    if (!this.isValid()) {
      const fullMessage = Object.keys(this.errors).map(k => (
        this.errors[k].join(', ')
      ));
      const error = new MutationValidationError(fullMessage, this.errors);

      return Promise.reject(error);
    }

    const { mutation, inputName } = this.constructor;

    if (!mutation) {
      return Promise.reject(new Error(`The mutation of ${this.constructor.name} is undefined`));
    }

    const mutationConfig = this.getMutationConfig();

    return new Promise((resolve, reject) => commitMutation(
      environment,
      {
        mutation,
        ...mutationConfig,
        variables: {
          [inputName]: {
            ...this.input,
          },
        },
        onCompleted: (response, errors) => resolve({ response, errors }),
        onError: error => reject(error),
      },
    ));
  };
}
