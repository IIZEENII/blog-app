import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LocalPostRepository } from '../features/posts/infrastructure/local-post-repository';
import { CreatePostUsecase } from '../features/posts/application/create-post';
import { GetAllPostsUsecase } from '../features/posts/application/get-all-posts';
import { PostsStore } from '../features/posts/infrastructure/stores/post-store';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  providers: [
    LocalPostRepository,
    CreatePostUsecase,
    GetAllPostsUsecase,
    PostsStore
  ],
  templateUrl: './app.component.html',
  styleUrl: 'app.component.scss',
})
export default class AppComponent {}
