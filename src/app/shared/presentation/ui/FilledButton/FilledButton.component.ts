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
    styleUrl: "FilledButton.component.scss",
    imports: [],
})
export class FilledButtonComponent {
    type = input<string>('button');
    isMini = input(false);
    @Input({ required: true }) onClick!: () => void;
}