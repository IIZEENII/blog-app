import { Injectable } from '@angular/core';
import { SingleAsyncStore } from '@features/shared/infrastructure/stores/single-async-store';
import { SignInAccountUsecase } from '../application/sign-in-account';
import { SignUpAccountUsecase } from '../application/sign-up-account';
import {
  SignInParams,
  SignUpParams,
} from '../domain/respositories/auth-repository';

@Injectable({ providedIn: 'root' })
export class AuthStore extends SingleAsyncStore<string> {
  constructor(
    private signInAccountUsecase: SignInAccountUsecase,
    private signUpAccountUsecase: SignUpAccountUsecase,
  ) {
    super();
  }

  async signIn(params: SignInParams) {
    this.setMutationAsLoading();
    const result = await this.signInAccountUsecase.call(params);
    result.fold(
      (failure) => this.setAsFailed(failure.message),
      (token) => this.setAsSuccess(token)
    );
    localStorage.setItem('token', this.getState().item!);
  }

  async signUp(params: SignUpParams) {
    this.setMutationAsLoading();
    const result = await this.signUpAccountUsecase.call(params);
    result.fold(
      (failure) => this.setAsFailed(failure.message),
      () => this.setAsSuccess(this.getState().item!)
    );
  }

  isAuth(): boolean {
    const token = localStorage.getItem('token');

    if (token) {
      this.setAsSuccess(token);
      return true;
    }

    return false;
  }
}
