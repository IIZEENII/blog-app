import { Component, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'text-field',
  imports: [ReactiveFormsModule],
  styleUrl: 'text-field.component.scss',
  template: `
    <input
      [formControl]="control()"
      class="text-field"
      [type]="type()"
      [placeholder]="placeholder()"
    />
  `,
})
export class TextFieldComponent {
  type = input('text');
  placeholder = input('text');
  control = input(new FormControl());
}
