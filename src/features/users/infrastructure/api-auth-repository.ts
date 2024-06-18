import { Injectable } from '@angular/core';
import {
  AuthRepository,
  SignInParams,
  SignUpParams,
} from '../domain/respositories/auth-repository';
import { Either } from '@features/shared/domain/either';
import { Failure } from '@features/shared/domain/failures/failure';
import { AccountNotExistsFailure } from '../domain/failures/account-not-exists-failure';
import { InvalidAccountCredentialsFailure } from '../domain/failures/invalid-account-credentials-failure';
import { HttpStatusCode } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ApiAuthRepository implements AuthRepository {
  private readonly auth_api_url = 'http://localhost:8080/api/v1/auth';

  async signIn(
    params: SignInParams
  ): Promise<Either<Failure, string>> {
    const response = await fetch(`${this.auth_api_url}/sign-in`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    });

    if (response.status == HttpStatusCode.NotFound) {
      return Either.left(new AccountNotExistsFailure());
    }

    if (response.status == HttpStatusCode.BadRequest) {
      return Either.left(new InvalidAccountCredentialsFailure());
    }

    const { access_token } = await response.json();

    return Either.right(access_token);
  }

  async signUp(params: SignUpParams): Promise<Either<Failure, void>> {
    const response = await fetch(`${this.auth_api_url}/sign-up`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    });

    if (!response.ok) {
      return Either.left(new InvalidAccountCredentialsFailure());
    }

    return Either.right(undefined);
  }
}
