import { Component, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'text-box',
  imports: [ReactiveFormsModule],
  styleUrl: 'text-box.component.scss',
  template: `
    <textarea
      class="text-box"
      [formControl]="control()"
      placeholder="body text (optional)"
    ></textarea>
  `,
})
export class TextBoxComponent {
  control = input<any>(new FormControl());
}
