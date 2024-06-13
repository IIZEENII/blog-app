import { Component, input } from "@angular/core";

@Component({
    standalone: true,
    selector: 'outline-button',
    template: `
       <button class="outline-button" type="button">{{ text() }}</button>
    `,
    styleUrl: "_index.scss",
    imports: [],
})
export class OutlineButtonComponent {
    text = input.required<string>();
}