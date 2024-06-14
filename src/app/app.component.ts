import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostsStore } from './posts/presentation/stores/post-store';
import { JsonPipe } from '@angular/common';
import { LocalPostRepository } from './posts/infrastructure/local-post-repository';
import { CreatePostUsecase } from './posts/application/create-post';
import { GetAllPostsUsecase } from './posts/application/get-all-posts';
import { NavbarComponent } from './shared/presentation/ui/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JsonPipe,  NavbarComponent],
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
