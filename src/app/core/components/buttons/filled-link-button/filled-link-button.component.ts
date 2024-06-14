import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'filled-link-button',
  imports: [RouterLink],
  template: `
    <a
      [class.filled-link-button--mini]="isMini"
      class="filled-link-button"
      [routerLink]="href"
    >
      <ng-content />
    </a>
  `,
  styleUrl: 'filled-link-button.component.scss',
})
export class FilledLinkButtonComponent {
  @Input({ required: true }) href = '';
  @Input() isMini = false;
}
