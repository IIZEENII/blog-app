import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LocalPostRepository } from './posts/infrastructure/local-post-repository';
import { CreatePostUsecase } from './posts/application/create-post';
import { GetAllPostsUsecase } from './posts/application/get-all-posts';
import { PostsStore } from './posts/presentation/stores/post-store';

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
