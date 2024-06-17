import { Injectable, inject } from '@angular/core';
import { LocalStorageAccountRepository } from '../infrastructure/local-storage-account-repository';
import { AccountRepository } from '../../users/domain/respositories/account-repository';
import { Failure } from '../../shared/domain/failures/failure';
import { Either } from '../../shared/domain/either';
import { Account } from '../../users/domain/entities/account';

@Injectable({ providedIn: 'root' })
export class GetAccountByIdUsecase {
  private accountRepository: AccountRepository = inject(
    LocalStorageAccountRepository
  );

  call(email: string): Promise<Either<Failure, Account>> {
    return this.accountRepository.getByEmail(email);
  }
}
