import ApiError from './ApiError';

export class GeneralError extends ApiError {}

export class UnauthorizedError extends GeneralError {
  constructor() {
    super(1, 'Unauthorized');
  }
}

export class PermissionDeniedError extends GeneralError {
  constructor() {
    super(2, 'Permission denied');
  }
}

export class RecordNotFoundError extends GeneralError {
  constructor() {
    super(3, 'Record is not found');
  }
}

export class InvalidCredentialError extends GeneralError {
  constructor() {
    super(4, 'Invalid credential');
  }
}

export class BannedError extends GeneralError {
  constructor() {
    super(5, 'User has been banned');
  }
}
