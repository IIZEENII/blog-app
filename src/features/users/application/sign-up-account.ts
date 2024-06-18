import { Injectable, inject } from '@angular/core';
import {
  AuthRepository,
  SignUpParams,
} from '@features/users/domain/respositories/auth-repository';
import { Failure } from '@features/shared/domain/failures/failure';
import { Either } from '@features/shared/domain/either';
import { ApiAuthRepository } from '../infrastructure/api-auth-repository';

@Injectable({ providedIn: 'root' })
export class SignUpAccountUsecase {
  private authRepository: AuthRepository = inject(ApiAuthRepository);

  call(params: SignUpParams): Promise<Either<Failure, void>> {
    return this.authRepository.signUp(params);
  }
}
