import { Injectable } from '@angular/core';
import { AsyncStore } from '../../../shared/infrastructure/stores/async-store';
import { GetAllPostsUsecase } from '../../application/get-all-posts';
import { CreatePostUsecase } from '../../application/create-post';
import { Post } from '../../domain/post';

@Injectable({ providedIn: 'root' })
export class PostsStore extends AsyncStore<Post> {
  constructor(
    private createPostUsecase: CreatePostUsecase,
    private getAllPostUsecase: GetAllPostsUsecase
  ) {
    super();
  }

  async create(post: { title: string; content: string; file: File | undefined }) {
    this.setMutationAsLoading();
    const result = await this.createPostUsecase.call(post);
    result.fold(
      (failure) => this.setAsFailed(failure.message),
      () => this.setAsSuccess(this.getState().data)
    );
  }

  async getAll() {
    this.setAsLoading();
    const result = await this.getAllPostUsecase.call();
    result.fold(
      (failure) => this.setAsFailed(failure.message),
      (posts) => this.setAsSuccess(posts)
    );
  }
}
