import { Component, OnInit } from '@angular/core';
import { TextFieldComponent } from '../../../core/components/forms/text-field/text-field.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FilledButtonComponent } from '../../../core/components/buttons/filled-button/filled-button.component';
import { Router, RouterLink } from '@angular/router';
import { AccountStore } from '../../../../features/auth/infrastructure/account-store';

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

  constructor(
    private router: Router,
    public accountStore: AccountStore
  ) {}

  ngOnInit(): void {
    this.signIn = this.signIn.bind(this);
  }

  async signIn() {
    await this.accountStore.signIn({
      email: this.formGroup.value.email!,
      password: this.formGroup.value.password!
    });

    if(!this.accountStore.getState().hasError) {
      this.router.navigate(['home'])
    }
  }
}
