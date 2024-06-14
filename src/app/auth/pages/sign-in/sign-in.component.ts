import { Component } from '@angular/core';
import { TextFieldComponent } from '../../../core/components/forms/text-field/text-field.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FilledButtonComponent } from '../../../core/components/buttons/filled-button/filled-button.component';
import { RouterLink } from '@angular/router';

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
export default class SignInComponent {
  formGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
}
