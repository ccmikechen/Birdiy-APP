import ApiError from './ApiError';

export class UserError extends ApiError {}

export class CreateUserError extends UserError {
  constructor() {
    super(1001, 'Cannot create user');
  }
}

export class UpdateUserError extends UserError {
  constructor() {
    super(1002, 'Cannot update user');
  }
}
