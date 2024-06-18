import { Injectable, inject } from '@angular/core';
import { SingleAsyncStore } from '@features/shared/infrastructure/stores/single-async-store';
import { User } from '../domain/user';
import { UserRepository } from '../domain/respositories/user-repository';
import { ApiAccountRepository } from './api-account-repository';

@Injectable({ providedIn: 'root' })
export class AccountStore extends SingleAsyncStore<User> {
  private userRepository: UserRepository = inject(ApiAccountRepository);

  constructor() {
    super();
  }

  async getAccount() {
    this.setAsLoading();
    const result = await this.userRepository.getAccount();
    result.fold(
      (failure) => this.setAsFailed(failure.message),
      (account) => this.setAsSuccess(account),
    );
  }
}
