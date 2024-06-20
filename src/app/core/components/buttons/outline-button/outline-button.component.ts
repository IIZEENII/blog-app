import { Component, Input, input } from "@angular/core";

@Component({
  standalone: true,
  selector: 'outline-button',
  template: `
    <button (click)="onClick()" class="outline-button" type="button">
      <ng-content />
    </button>
  `,
  styleUrl: 'outline-button.component.scss',
  imports: [],
})
export class OutlineButtonComponent {
  type = input<string>('button');
  @Input() onClick: () => void = () => {};
}
