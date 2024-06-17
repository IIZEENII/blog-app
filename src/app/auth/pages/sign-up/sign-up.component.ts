import { Component, OnInit } from '@angular/core';
import { TextFieldComponent } from '../../../core/components/forms/text-field/text-field.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FilledButtonComponent } from '../../../core/components/buttons/filled-button/filled-button.component';
import { Router, RouterLink } from '@angular/router';
import { AccountStore } from '../../../../features/users/infrastructure/account-store';

@Component({
  standalone: true,
  imports: [
    TextFieldComponent,
    ReactiveFormsModule,
    FilledButtonComponent,
    RouterLink,
  ],
  templateUrl: 'sign-up.component.html',
  styleUrl: 'sign-up.component.scss',
})
export default class SignUpComponent implements OnInit {
  formGroup = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private router: Router, public accountStore: AccountStore) {}

  ngOnInit(): void {
    this.signUp = this.signUp.bind(this);
  }

  async signUp() {
    await this.accountStore.create({
      email: this.formGroup.value.email!,
      password: this.formGroup.value.password!,
    })

    if(!this.accountStore.getState().hasError) {
      this.router.navigate(['/auth/sign-in'])
    }
  }
}
