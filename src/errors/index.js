import errorsMap from './errorsMap';
import NetworkRequestError from './NetworkRequestError';
import InternalServerError from './InternalServerError';

export const handleErrors = (error) => {
  if (
    ((error instanceof TypeError) && error.message === 'Network request failed')
      || (((error instanceof Error) && error.message === 'Network request error'))
  ) {
    throw new NetworkRequestError();
  }

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

export { default as ApiError } from './ApiError';
export { default as NetworkRequestError } from './NetworkRequestError';
export { default as InternalServerError } from './InternalServerError';
export * from './generalErrors';
export * from './userErrors';
export * from './projectErrors';
export * from './postErrors';
