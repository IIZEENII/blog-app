import { Component, input } from "@angular/core";

@Component({
    standalone: true,
    selector: 'avatar',
    template: `
        <img class="avatar" [src]="avatar()" [alt]="username()" />
    `,
    styleUrl: "_index.scss",
    imports: [],
})
export class AvatarComponent {
    username = input.required<string>();
    avatar = input.required<string>();
}