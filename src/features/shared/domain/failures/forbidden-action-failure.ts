import { Failure } from './failure';

export class ForbiddenActionFailure extends Failure {
  constructor() {
    super('Actions is not allowed');
  }
}
