import ApiError from './ApiError';

export default class InternalServerError extends ApiError {
  constructor() {
    super(0, 'Internal server error');
  }
}
