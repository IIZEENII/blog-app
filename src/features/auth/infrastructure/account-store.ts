import { Injectable } from '@angular/core';
import { AsyncStore } from '../../shared/infrastructure/stores/async-store';
import { Account } from '../domain/account';
import { CreateAccountUsecase } from '../application/create-account';
import { GetAccountByIdUsecase } from '../application/get-account-by-id';
import { SignInAccountUsecase } from '../application/sign-in-account';

@Injectable({ providedIn: 'root' })
export class AccountStore extends AsyncStore<Account> {
  constructor(
    private createAccountUsecase: CreateAccountUsecase,
    private signInAccountUsecase: SignInAccountUsecase,
    private getAccountByIdUsecase: GetAccountByIdUsecase
  ) {
    super();
  }

  async signIn(account: Account) {
    this.setMutationAsLoading();
    const accounts = [account, ...this.getState().data];
    const result = await this.signInAccountUsecase.call(account);
    result.fold(
      (failure) => this.setAsFailed(failure.message),
      () => this.setAsSuccess(accounts)
    );
  }

  async create(account: Account) {
    this.setMutationAsLoading();
    const accounts = [account, ...this.getState().data];
    const result = await this.createAccountUsecase.call(account);
    result.fold(
      (failure) => this.setAsFailed(failure.message),
      () => this.setAsSuccess(accounts)
    );
  }

  async getByEmail(email: string) {
    this.setAsLoading();
    const result = await this.getAccountByIdUsecase.call(email);
    result.fold(
      (failure) => this.setAsFailed(failure.message),
      (account) => this.setAsSuccess([account])
    );
  }
}
