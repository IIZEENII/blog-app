import { Component } from "@angular/core";
import { AvatarComponent } from "../../../../users/presentation/ui/Avatar";
import { FilledButtonComponent } from "../FilledButton/FilledButton.component";

@Component({
    standalone: true,
    selector: 'search-bar',
    template: `
    <div class="search-bar__wrapper">
        <input 
            class="search-bar" 
            placeholder="search" 
            type="search" 
        >
        <span class="icon-search search-bar__icon"></span>
    </div>
    `,
    styleUrl: "SearchBar.component.scss",
    imports: [AvatarComponent, FilledButtonComponent],
    providers: []
})
export class SearchBarComponent {
}