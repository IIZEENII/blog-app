import { Failure } from "../../../shared/domain/failures/failure";

export class AccountNotFoundFailure extends Failure {
  constructor() {
    super('Account not exists');
  }
}
