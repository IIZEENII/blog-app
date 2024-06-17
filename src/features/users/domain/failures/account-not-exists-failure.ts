import { Failure } from "@features/shared/domain/failures/failure";

export class AccountNotExistsFailure extends Failure {
  constructor() {
    super('Account not exits');
  }
}
