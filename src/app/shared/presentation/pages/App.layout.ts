import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostsStore } from '../../../posts/presentation/stores/PostStore';
import { JsonPipe } from '@angular/common';
import { LocalPostRepository } from '../../../posts/infrastructure/LocalPostRepository';
import { CreatePostUsecase } from '../../../posts/application/CreatePost';
import { GetAllPostsUsecase } from '../../../posts/application/GetAllPosts';
import { NavbarComponent } from '../ui/Navbar';

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
  templateUrl: './App.layout.html',
  styleUrl: 'App.layout.scss',
})
export default class AppComponent {}
