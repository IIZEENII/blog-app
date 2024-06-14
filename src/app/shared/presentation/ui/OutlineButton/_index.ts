import { Component } from "@angular/core";

@Component({
    standalone: true,
    selector: 'outline-button',
    template: `
       <button class="outline-button" type="button">
            <ng-content />
       </button>
    `,
    styleUrl: "_index.scss",
    imports: [],
})
export class OutlineButtonComponent {}