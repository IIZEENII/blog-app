import { Injectable, inject } from '@angular/core';
import { SingleAsyncStore } from '@features/shared/infrastructure/stores/single-async-store';
import { AccountRepository } from '../domain/respositories/account-repository';
import { ApiAccountRepository } from './api-account-repository';
import { User } from '../domain/user';

@Injectable({ providedIn: 'root' })
export class AccountStore extends SingleAsyncStore<User> {
  private accountRepository: AccountRepository = inject(ApiAccountRepository);

  constructor() {
    super();
  }

  async getAccount() {
    this.setAsLoading();
    const result = await this.accountRepository.getByToken();
    result.fold(
      (failure) => this.setAsFailed(failure.message),
      (account) => this.setAsSuccess(account)
    );
  }
}
