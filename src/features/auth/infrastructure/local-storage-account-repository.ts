import { Injectable } from '@angular/core';
import { Either } from '../../shared/domain/either';
import { Failure } from '../../shared/domain/failures/failure';
import { AccountRepository } from '../domain/account-repository';
import { Account } from '../domain/account';
import { AccountNotFoundFailure } from '../domain/failures/account-not-found-failure';
import { InvalidAccountCredentialsFailure } from '../domain/failures/invalid-account-credentials-failure';

@Injectable()
export class LocalStorageAccountRepository implements AccountRepository {
  private readonly STORAGE_KEY = 'account';

  private loadAccounts(): Account[] {
    const postsJson = localStorage.getItem(this.STORAGE_KEY);
    return postsJson ? JSON.parse(postsJson) : [];
  }

  private saveAccounts(accounts: Account[]): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(accounts));
  }

  signIn(account: Account): Promise<Either<Failure, void>> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const accounts = this.loadAccounts();
        const accountFound = accounts.find(
          (iterableAccount) => iterableAccount.email == account.email
        );

        if (!accountFound) {
          resolve(Either.left(new AccountNotFoundFailure()));
          return;
        }

        if (accountFound.password != account.password) {
          resolve(Either.left(new InvalidAccountCredentialsFailure()));
          return;
        }

        resolve(Either.right(undefined));
      }, 2000);
    });
  }

  create(account: Account): Promise<Either<Failure, void>> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const accounts = this.loadAccounts();
        accounts.push(account);
        this.saveAccounts(accounts);
        resolve(Either.right(undefined));
      }, 2000);
    });
  }

  getByEmail(email: string): Promise<Either<Failure, Account>> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const accounts = this.loadAccounts();
        const account = accounts.find((account) => account.email == email);
        if (!account) resolve(Either.left(new AccountNotFoundFailure()));
        else resolve(Either.right(account));
      }, 1500);
    });
  }
}
