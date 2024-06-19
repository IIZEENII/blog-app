import { Injectable, inject } from '@angular/core';
import { SingleAsyncStore } from '@features/shared/infrastructure/stores/single-async-store';
import { User } from '../domain/user';
import { AccountRepository } from '../domain/respositories/account-repository';
import { ApiAccountRepository } from './api-account-repository';

@Injectable({ providedIn: 'root' })
export class AccountStore extends SingleAsyncStore<User> {
  private accountRepository: AccountRepository = inject(ApiAccountRepository);

  constructor() {
    super();
    this.getAccount();
  }

  async getAccount() {
    this.setAsLoading();
    const result = await this.accountRepository.get();
    result.fold(
      (failure) => this.setAsFailed(failure.message),
      (account) => this.setAsSuccess(account),
    );
  }
}
