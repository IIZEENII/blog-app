import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterOutlet],
  styleUrl: 'auth-layout.component.scss',
  template: `
    <main class="auth-container">
      <router-outlet />
    </main>
  `,
})
export default class SignInComponent {}
