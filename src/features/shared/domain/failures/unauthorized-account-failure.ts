import { Failure } from '../../../shared/domain/failures/failure';

export class UnauthorizedAccountFailure extends Failure {
  constructor() {
    super('Account unauthorized');
  }
}
