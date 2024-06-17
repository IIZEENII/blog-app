import { Component, OnInit } from '@angular/core';
import { HeaderSectionComponent } from '../../../core/components/navigators/header-section/header-section.component';
import { RouterLink } from '@angular/router';
import { PostsStore } from '../../../../features/posts/infrastructure/stores/post-store';
import { PostCardComponent } from '../../../posts/components/post-card/post-card.component';
import { ProfileHeaderComponent } from '../../components/profile-header/profile-header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterLink,
    HeaderSectionComponent,
    ProfileHeaderComponent,
    PostCardComponent,
  ],
  styleUrl: 'profile.component.scss',
  template: `
    <header-section
      headerName="Profile"
      actionName="Create"
      [action]="createPost"
    />
    <profile-header />
    <nav class="profile__tabs">
      <div class=" profile__tabs-container">
        <a routerLink="/account/post">My Post</a>
        <a routerLink="/account/photos">Photos</a>
      </div>
    </nav>
    @for (post of postStore.getState().data; track $index) {
    <post-card [post]="post" />
    }
  `,
})
export default class ProfileComponent implements OnInit {
  createPost() {}

  constructor(public postStore: PostsStore) {
    this.postStore.getAll();
  }

  ngOnInit(): void {}
}
