import { Failure } from "./failure";

export class NotFoundFailure extends Failure {
  constructor() {
    super('Element not found');
  }
}
