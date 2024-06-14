import { Failure } from '../../../shared/domain/failures/failure';

export class InvalidAccountCredentialsFailure extends Failure {
  constructor() {
    super('Invalid credentials, try again');
  }
}
