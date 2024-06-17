import { Injectable, inject } from '@angular/core';
import { AccountRepository } from '../../users/domain/respositories/account-repository';
import { Failure } from '../../shared/domain/failures/failure';
import { Either } from '../../shared/domain/either';
import { Account } from '../../users/domain/entities/account';
import { ApiUserRepository } from '../infrastructure/api-user-repository';

@Injectable({ providedIn: 'root' })
export class SignInAccountUsecase {
  private accountRepository: AccountRepository = inject(
    ApiUserRepository
  );

  call(account: Account): Promise<Either<Failure, void>> {
    return this.accountRepository.signIn(account);
  }
}
