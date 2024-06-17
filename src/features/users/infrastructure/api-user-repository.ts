import { Injectable } from '@angular/core';
import { Either } from '../../shared/domain/either';
import { Failure } from '../../shared/domain/failures/failure';
import { AccountRepository } from '../domain/respositories/account-repository';
import { Account } from '../domain/entities/account';
import { InvalidAccountCredentialsFailure } from '../domain/failures/invalid-account-credentials-failure';
import { HttpStatusCode } from '@angular/common/http';
import { AccountNotExistsFailure } from '../domain/failures/account-not-exists-failure';

@Injectable()
export class ApiUserRepository implements AccountRepository {
  getByEmail(id: string): Promise<Either<Failure, Account>> {
    throw new Error('Method not implemented.');
  }

  private readonly auth_api_url = 'http://localhost:8080/api/v1/auth';
  private readonly token = localStorage.getItem('access_token');

  async signIn(account: Account): Promise<Either<Failure, void>> {
    const response = await fetch(`${this.auth_api_url}/sign-in`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(account),
    });

    if (response.status == HttpStatusCode.NotFound) {
      return Either.left(new AccountNotExistsFailure());
    }

    if (response.status == HttpStatusCode.BadRequest) {
      return Either.left(new InvalidAccountCredentialsFailure());
    }

    const { access_token } = await response.json();

    localStorage.setItem('access_token', access_token);

    return Either.right(undefined);
  }
}
