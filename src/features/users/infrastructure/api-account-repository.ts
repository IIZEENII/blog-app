import { Injectable } from '@angular/core';
import { HttpStatusCode } from '@angular/common/http';
import {
  UserParams,
  AccountRepository,
} from '../domain/respositories/account-repository';
import { Either } from '@features/shared/domain/either';
import { Failure } from '@features/shared/domain/failures/failure';
import { User } from '../domain/user';
import { BadRequestFailure } from '@features/shared/domain/failures/bad-request-failure';
import { AccountNotExistsFailure } from '../domain/failures/account-not-exists-failure';

@Injectable({ providedIn: 'root' })
export class ApiAccountRepository implements AccountRepository {
  private ACCOUNT_API_URL = 'http://localhost:8080/api/v1/account';
  private readonly token = localStorage.getItem('token');

  async get(): Promise<Either<Failure, User>> {
    const response = await fetch(this.ACCOUNT_API_URL, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });

    if (response.status == HttpStatusCode.NotFound) {
      return Either.left(new AccountNotExistsFailure());
    }

    if (!response.ok) {
      return Either.left(new BadRequestFailure());
    }

    return Either.right(await response.json());
  }

  async update(params: UserParams): Promise<Either<Failure, void>> {
    const response = await fetch(this.ACCOUNT_API_URL, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.token}`,
      },
      body: JSON.stringify(params),
    });

    if (!response.ok) {
      return Either.left(new BadRequestFailure());
    }

    return Either.right(undefined);
  }
}
