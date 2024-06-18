import { Component, OnInit } from '@angular/core';
import { TextFieldComponent } from '@app/core/components/forms/text-field/text-field.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FilledButtonComponent } from '@app/core/components/buttons/filled-button/filled-button.component';
import { Router, RouterLink } from '@angular/router';
import { AuthStore } from '@features/users/infrastructure/auth-store';

@Component({
  standalone: true,
  imports: [
    TextFieldComponent,
    ReactiveFormsModule,
    FilledButtonComponent,
    RouterLink,
  ],
  templateUrl: 'sign-in.component.html',
  styleUrl: 'sign-in.component.scss',
})
export default class SignInComponent implements OnInit {
  formGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private router: Router, public authStore: AuthStore) {}

  ngOnInit(): void {
    this.signIn = this.signIn.bind(this);
  }

  async signIn() {
    await this.authStore.signIn({
      email: this.formGroup.value.email!,
      password: this.formGroup.value.password!,
    });

    if (!this.authStore.getState().hasError) {
      this.router.navigate(['home']);
    }
  }
}
