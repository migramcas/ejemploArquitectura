export class ApplicationException extends Error {
  constructor(message: string) {
    if (!message) message = "An unexpected error ocurred";
    super(message);
  }
}
