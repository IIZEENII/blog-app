import { Injectable, inject } from '@angular/core';
import { LocalStorageAccountRepository } from '../infrastructure/local-storage-account-repository';
import { AccountRepository } from '../domain/account-repository';
import { Failure } from '../../shared/domain/failures/failure';
import { Either } from '../../shared/domain/either';
import { Account } from '../domain/account';

@Injectable({ providedIn: 'root' })
export class CreateAccountUsecase {
  private accountRepository: AccountRepository = inject(
    LocalStorageAccountRepository
  );

  call(account: Account): Promise<Either<Failure, void>> {
    return this.accountRepository.create(account);
  }
}
