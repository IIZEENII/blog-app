import { Either } from '@features/shared/domain/either';
import { Failure } from '@features/shared/domain/failures/failure';
import { User } from '../entities/user';

export interface UserRepository {
  create(user: User): Promise<Either<Failure, void>>;
  getById(user: User): Promise<Either<Failure, User>>;
}
