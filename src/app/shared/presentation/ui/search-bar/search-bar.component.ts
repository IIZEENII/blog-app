import { Component } from "@angular/core";
import { AvatarComponent } from "../../../../users/presentation/ui/avatar/avatar.component";
import { FilledButtonComponent } from "../filled-button/filled-button.component";

@Component({
  standalone: true,
  selector: 'search-bar',
  template: `
    <div class="search-bar__container">
      <span class="icon-search"></span>
      <input class="search-bar" placeholder="search" type="search" />
    </div>
  `,
  styleUrl: 'search-bar.component.scss',
  imports: [AvatarComponent, FilledButtonComponent],
  providers: [],
})
export class SearchBarComponent {}
