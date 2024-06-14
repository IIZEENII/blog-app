import { Either } from "../../shared/domain/either";
import { Failure } from "../../shared/domain/failures/failure";
import { Account } from "./account";

export interface AccountRepository {
  signIn(account: Account): Promise<Either<Failure, void>>;
  create(account: Account): Promise<Either<Failure, void>>;
  getByEmail(id: string): Promise<Either<Failure, Account>>;
}
