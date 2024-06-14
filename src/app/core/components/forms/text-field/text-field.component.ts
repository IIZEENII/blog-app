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
      type="text"
      placeholder="Title"
    />
  `,
})
export class TextFieldComponent {
  control = input(new FormControl());
}
