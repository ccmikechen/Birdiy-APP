import errorsMap from './errorsMap';
import InternalServerError from './InternalServerError';
import { UnauthorizedError } from './generalErrors';

import { showLoginAlert } from '../helpers/alert';

export const handleErrors = (error) => {
  throw new InternalServerError(error);
};

export const withErrorHandler = func => (...args) => (
  func(...args).catch(handleErrors)
);

export const parseError = (error) => {
  if (!error) {
    return null;
  }

  const ErrorClass = errorsMap[error.code];

  if (!ErrorClass) {
    return new InternalServerError(error);
  }

  return new ErrorClass(error);
};

export const handleUnauthorizedActionError = (throwError = false) => (e) => {
  if (e instanceof UnauthorizedError) {
    showLoginAlert();
  }

  if (throwError) {
    throw e;
  }
};

export { default as ApiError } from './ApiError';
export { default as InternalServerError } from './InternalServerError';
export * from './generalErrors';
export * from './userErrors';
export * from './projectErrors';
export * from './postErrors';
