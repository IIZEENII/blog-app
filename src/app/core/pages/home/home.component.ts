import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../components/navigators/navbar/navbar.component';
import { PostsStore } from '../../../../features/posts/infrastructure/stores/post-store';
import { PostCardComponent } from '../../../posts/components/post-card/post-card.component';

@Component({
  standalone: true,
  imports: [PostCardComponent, NavbarComponent],
  templateUrl: 'home.component.html',
  styleUrl: 'home.component.scss'
})
export default class PostComponent implements OnInit {
  constructor(public postStore: PostsStore) {}

  ngOnInit(): void {
    this.postStore.getAll();
  }
}
