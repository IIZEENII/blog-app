import { Component, OnInit } from '@angular/core';
import { SearchBarComponent } from '../../search-bar/search-bar.component';
import { RouterLink } from '@angular/router';
import { FilledLinkButtonComponent } from '../../buttons/filled-link-button/filled-link-button.component';
import { AvatarComponent } from '../../../../user/components/avatar/avatar.component';
import { AccountStore } from '@features/users/infrastructure/account-store';

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
  providers: [AccountStore],
})
export class NavbarComponent implements OnInit {
  constructor(public accountStore: AccountStore) {}

  ngOnInit(): void {
    this.accountStore.getAccount();
  }
}
