import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreatePostUsecase } from '../features/posts/application/create-post';
import { GetAllPostsUsecase } from '../features/posts/application/get-all-posts';
import { PostsStore } from '../features/posts/infrastructure/stores/post-store';
import { LocalStoragePostRepository } from '../features/posts/infrastructure/local-storage-post-repository';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  providers: [
    LocalStoragePostRepository,
    CreatePostUsecase,
    GetAllPostsUsecase,
    PostsStore
  ],
  templateUrl: './app.component.html',
  styleUrl: 'app.component.scss',
})
export default class AppComponent {}
