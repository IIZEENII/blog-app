import { Component, OnInit } from '@angular/core';
import { PostsStore } from '../../stores/post-store';
import { PostCardComponent } from '../../ui/post-card/post-card.component';
import { NavbarComponent } from '../../../../shared/presentation/ui/navbar/navbar.component';

@Component({
  standalone: true,
  imports: [PostCardComponent, NavbarComponent],
  templateUrl: 'post.component.html',
  styleUrl: 'post.component.scss'
})
export default class PostComponent implements OnInit {
  constructor(public postStore: PostsStore) {}

  ngOnInit(): void {
    this.postStore.getAll();
  }
}
