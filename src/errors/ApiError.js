export default class ApiError extends Error {
  constructor(code, message, payload) {
    super(message);
    this.code = code;
    this.payload = payload;
  }

  get code() {
    return this.code;
  }

  get message() {
    return this.message;
  }

  get payload() {
    return this.payload;
  }
}
