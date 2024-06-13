import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostsStore } from '../../../posts/presentation/stores/PostStore';
import { JsonPipe } from '@angular/common';
import { LocalPostRepository } from '../../../posts/infrastructure/LocalPostRepository';
import { CreatePostUsecase } from '../../../posts/application/CreatePost';
import { GetAllPostsUsecase } from '../../../posts/application/GetAllPosts';
import { PostCardComponent } from '../../../posts/presentation/ui/PostCard';
import { NavbarComponent } from '../ui/Navbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JsonPipe, PostCardComponent, NavbarComponent],
  providers: [
    LocalPostRepository,
    CreatePostUsecase,
    GetAllPostsUsecase,
    PostsStore
  ],
  templateUrl: './app.component.html',
  styleUrl: 'app.page.scss',
})
export class AppComponent implements OnInit {
  postStore = inject(PostsStore);

  ngOnInit(): void {
    this.postStore.getAll();
  }
  createPost() {
    this.postStore.create({
      id: 1,
      title: 'test',
      content: 'hi guy',
      mediaURL: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
      autor: {
        id: 1,
        email: 'zeen.cr@gmail.com',
        username: 'Adrian Mis',
        avatar: 'https://citizensketcher.com/wp-content/uploads/2022/05/thispersondoesnotexist_43-1.jpg',
      }
    })
  }

  loadPost() {
    this.postStore.getAll();
  }
}
