import errorsMap from './errorsMap';
import InternalServerError from './InternalServerError';

export const handleErrors = (error) => {
  if (error.code) {
    const ErrorClass = errorsMap[error.code];
    throw new ErrorClass(error);
  }

  throw new InternalServerError(error);
};

export const withErrorHandler = func => (...args) => (
  func(...args).catch(handleErrors)
);

export { default as ApiError } from './ApiError';
export { default as InternalServerError } from './InternalServerError';
export * from './generalErrors';
export * from './userErrors';
export * from './projectErrors';
export * from './postErrors';
