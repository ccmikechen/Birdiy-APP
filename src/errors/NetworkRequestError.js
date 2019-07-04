import ApiError from './ApiError';

export default class NetworkRequestError extends ApiError {
  constructor() {
    super(-1, 'Network request error');
  }
}
