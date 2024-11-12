export class NotFoundError extends Error {
  status: number;

  constructor(message: string = "Not Found") {
    super(message);

    this.status = 404;
    this.message = message;
    this.name = "NotFoundError";
  }
}
