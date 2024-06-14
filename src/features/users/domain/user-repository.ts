import { Either } from "../../shared/domain/either";
import { Failure } from "../../shared/domain/failures/failure";
import { User } from "./user";

export interface UserRepository {
  create(user: User): Promise<Either<Failure, void>>;
  getById(user: User): Promise<Either<Failure, User>>;
}
