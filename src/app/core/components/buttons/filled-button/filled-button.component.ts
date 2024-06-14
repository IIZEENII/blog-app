import { Component, Input, input } from "@angular/core";

@Component({
    standalone: true,
    selector: 'filled-button',
    template: `
        <button
            [class.filled-button--mini]="isMini()"
            [type]="type()"
            class="filled-button"
            (click)="onClick()"
        >
            <ng-content />
        </button>
    `,
    styleUrl: "filled-button.component.scss",
})
export class FilledButtonComponent {
    type = input<string>('button');
    isMini = input(false);
    @Input() onClick: () => void = () => {};
}
