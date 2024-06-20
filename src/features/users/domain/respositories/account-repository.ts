import { Either } from '@features/shared/domain/either';
import { Failure } from '@features/shared/domain/failures/failure';
import { User } from '../user';

export interface UserParams {
  username: string;
  password: string;
}

export interface AccountRepository {
  getByToken(): Promise<Either<Failure, User>>;
  updateByToken(params: UserParams): Promise<Either<Failure, void>>;
}
