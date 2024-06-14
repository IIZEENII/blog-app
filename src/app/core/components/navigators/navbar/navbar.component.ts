import { Component } from '@angular/core';
import { SearchBarComponent } from '../../search-bar/search-bar.component';
import { RouterLink } from '@angular/router';
import { FilledLinkButtonComponent } from '../../buttons/filled-link-button/filled-link-button.component';
import { AvatarComponent } from '../../../../user/components/avatar/avatar.component';

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
