import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreateAccountUsecase } from '@features/users/application/create-account';
import { GetAccountByIdUsecase } from '@features/users/application/get-account-by-id';
import { SignInAccountUsecase } from '@features/users/application/sign-in-account';
import { AccountStore } from '@features/users/infrastructure/account-store';
import { ApiUserRepository } from '@features/users/infrastructure/api-user-repository';
import { LocalStorageAccountRepository } from '@features/users/infrastructure/local-storage-account-repository';

@Component({
  standalone: true,
  imports: [RouterOutlet],
  providers: [
    LocalStorageAccountRepository,
    ApiUserRepository,
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
