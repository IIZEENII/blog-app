import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreatePostUsecase } from '../features/posts/application/create-post';
import { GetAllPostsUsecase } from '../features/posts/application/get-all-posts';
import { PostsStore } from '../features/posts/infrastructure/stores/post-store';
import { ApiPostRepository } from '@features/posts/infrastructure/repositories/api-post-repository';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  providers: [
    ApiPostRepository,
    CreatePostUsecase,
    GetAllPostsUsecase,
    PostsStore
  ],
  templateUrl: './app.component.html',
  styleUrl: 'app.component.scss',
})
export default class AppComponent {}
