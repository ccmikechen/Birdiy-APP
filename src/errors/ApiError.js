export default class ApiError extends Error {
  constructor(code, message, payload) {
    super(message);
    this.code = code;
    this.payload = payload;
  }

  getCode() {
    return this.code;
  }

  getMessage() {
    return this.message;
  }

  getPayload() {
    return this.payload;
  }
}
