import { Injectable, inject } from '@angular/core';
import {
  AuthRepository,
  SignInParams,
} from '@features/users/domain/respositories/auth-repository';
import { Failure } from '@features/shared/domain/failures/failure';
import { Either } from '@features/shared/domain/either';
import { ApiAuthRepository } from '../infrastructure/api-auth-repository';

@Injectable({ providedIn: 'root' })
export class SignInAccountUsecase {
  private authRepository: AuthRepository = inject(ApiAuthRepository);

  call(params: SignInParams): Promise<Either<Failure, string>> {
    return this.authRepository.signIn(params);
  }
}
