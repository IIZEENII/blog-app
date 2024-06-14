import { Component, Input } from '@angular/core';
import { FilledButtonComponent } from '../../buttons/filled-button/filled-button.component';
import { Location } from '@angular/common';

@Component({
  standalone: true,
  selector: 'header-section',
  imports: [FilledButtonComponent],
  styleUrl: 'header-section.component.scss',
  template: `
    <nav class="header-section">
      <div class="header-section__left-action">
        <span (click)="goToBack()" class="icon-close"></span>
        <h1>{{ headerName }}</h1>
      </div>
      <filled-button type="submit" [isMini]="true" [onClick]="action">
        {{ actionName }}
      </filled-button>
    </nav>
  `,
})
export class HeaderSectionComponent {
  @Input({ required: true }) action!: () => void;
  @Input({ required: true }) headerName!: string;
  @Input({ required: true }) actionName!: string;

  constructor(private location: Location) {}

  goToBack() {
    this.location.back();
  }
}
