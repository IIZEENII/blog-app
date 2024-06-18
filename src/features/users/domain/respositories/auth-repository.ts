import { Either } from '@features/shared/domain/either';
import { Failure } from '@features/shared/domain/failures/failure';

export interface SignInParams {
  email: string;
  password: string;
}

export interface SignUpParams extends SignInParams {
  username: string;
}

export interface AuthRepository {
  signIn(params: SignInParams): Promise<Either<Failure, string>>;
  signUp(params: SignUpParams): Promise<Either<Failure, void>>;
}
