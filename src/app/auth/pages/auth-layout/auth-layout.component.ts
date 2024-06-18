import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignInAccountUsecase } from '@features/users/application/sign-in-account';
import { SignUpAccountUsecase } from '@features/users/application/sign-up-account';
import { ApiAuthRepository } from '@features/users/infrastructure/api-auth-repository';
import { AuthStore } from '@features/users/infrastructure/auth-store';

@Component({
  standalone: true,
  imports: [RouterOutlet],
  providers: [
    ApiAuthRepository,
    SignInAccountUsecase,
    SignUpAccountUsecase,
    AuthStore,
  ],
  styleUrl: 'auth-layout.component.scss',
  template: `
    <main class="auth-container">
      <router-outlet />
    </main>
  `,
})
export default class SignInComponent {}
