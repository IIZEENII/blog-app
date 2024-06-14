import { Component } from '@angular/core';
import { AvatarComponent } from '../../../../users/presentation/ui/avatar/avatar.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { RouterLink } from '@angular/router';
import { FilledLinkButtonComponent } from '../filled-link-button/filled-link-button.component';

@Component({
  standalone: true,
  selector: 'navbar',
  templateUrl: 'navbar.component.html',
  styleUrl: 'navbar.component.scss',
  imports: [
    AvatarComponent,
    FilledLinkButtonComponent,
    SearchBarComponent,
    RouterLink,
  ],
})
export class NavbarComponent {}
