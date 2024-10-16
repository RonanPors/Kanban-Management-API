export default class ApiError extends Error {

  constructor(name, message, causeObj){
    super(message, causeObj);
    this.name = name || 'ErrorApi';
    this.status = causeObj.status || 500;
  }
}
