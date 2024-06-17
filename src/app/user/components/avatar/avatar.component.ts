import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'avatar',
  template: `
    @if(!avatar()) {
    <div
      [style]="{
        height: size() + 'px',
        width: size() + 'px',
        background: 'white',
        color: 'black',
        display: 'flex',
        'justify-content': 'center',
        'align-items': 'center',
      }"
      class="avatar"
    >
      {{ username()[0].toUpperCase() }}
    </div>
    } @else {
    <img
      [width]="size()"
      [height]="size()"
      class="avatar"
      [src]="avatar()"
      [alt]="username()"
    />
    }
  `,
  styleUrl: 'avatar.component.scss',
  imports: [],
})
export class AvatarComponent {
  size = input(32);
  username = input.required<string>();
  avatar = input.required<string | undefined>();
}
