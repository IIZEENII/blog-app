import { Either } from '@features/shared/domain/either';
import { Failure } from '@features/shared/domain/failures/failure';
import { User } from '../user';

export interface UserParams {
  username: string;
  password: string;
}

export interface AccountRepository {
  get(): Promise<Either<Failure, User>>;
  update(params: UserParams): Promise<Either<Failure, void>>;
}
