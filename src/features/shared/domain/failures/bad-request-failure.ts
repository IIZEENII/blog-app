import { Failure } from './failure';

export class BadRequestFailure extends Failure {
  constructor() {
    super('bad request, try again');
  }
}
