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
  templateUrl: 'sign-up.component.html',
  styleUrl: 'sign-up.component.scss',
})
export default class SignUpComponent {
  formGroup = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });
}
