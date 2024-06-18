import { Injectable } from '@angular/core';
import { HttpStatusCode } from '@angular/common/http';
import {
  UserParams,
  UserRepository,
} from '../domain/respositories/user-repository';
import { Either } from '@features/shared/domain/either';
import { Failure } from '@features/shared/domain/failures/failure';
import { User } from '../domain/user';
import { BadRequestFailure } from '@features/shared/domain/failures/bad-request-failure';
import { AccountNotExistsFailure } from '../domain/failures/account-not-exists-failure';

@Injectable({ providedIn: 'root' })
export class ApiAccountRepository implements UserRepository {
  private readonly account_api_url = 'http://localhost:8080/api/v1/account';
  private readonly token = localStorage.getItem('token');

  async getAccount(): Promise<Either<Failure, User>> {
    const response = await fetch(this.account_api_url, {
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
    const response = await fetch(this.account_api_url, {
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
