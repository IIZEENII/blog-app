import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LocalStorageAccountRepository } from '../../../../features/auth/infrastructure/local-storage-account-repository';
import { CreateAccountUsecase } from '../../../../features/auth/application/create-account';
import { GetAccountByIdUsecase } from '../../../../features/auth/application/get-account-by-id';
import { AccountStore } from '../../../../features/auth/infrastructure/account-store';
import { SignInAccountUsecase } from '../../../../features/auth/application/sign-in-account';

@Component({
  standalone: true,
  imports: [RouterOutlet],
  providers: [
    LocalStorageAccountRepository,
    CreateAccountUsecase,
    GetAccountByIdUsecase,
    SignInAccountUsecase,
    AccountStore,
  ],
  styleUrl: 'auth-layout.component.scss',
  template: `
    <main class="auth-container">
      <router-outlet />
    </main>
  `,
})
export default class SignInComponent {}
