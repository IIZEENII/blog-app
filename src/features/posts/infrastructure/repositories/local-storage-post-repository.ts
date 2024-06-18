import { Injectable } from '@angular/core';
import { Post } from '@features/posts/domain/entities/post';
import { PostNotFoundFailure } from '@features/posts/domain/failures/post-not-found-failure';
import { PostParams, PostRepository } from '@features/posts/domain/repositories/post-repository';
import { Either } from '@features/shared/domain/either';
import { Failure } from '@features/shared/domain/failures/failure';

@Injectable()
export class LocalStoragePostRepository implements PostRepository {
  private readonly STORAGE_KEY = 'posts';

  private loadPosts(): Post[] {
    const postsJson = localStorage.getItem(this.STORAGE_KEY);
    return postsJson ? JSON.parse(postsJson) : [];
  }

  private savePosts(posts: Post[]): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(posts));
  }

  getAll(): Promise<Either<Failure, Post[]>> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const posts = this.loadPosts();
        resolve(Either.right(posts));
      }, 1500);
    });
  }

  save(params: PostParams): Promise<Either<Failure, void>> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const posts = this.loadPosts();
        posts.push();
        this.savePosts(posts);
        resolve(Either.right(undefined));
      }, 2000);
    });
  }

  deleteById(id: string): Promise<Either<Failure, void>> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const posts = this.loadPosts();
        const updatedPosts = posts.filter((post) => post.id !== id);
        if (posts.length === updatedPosts.length) {
          resolve(Either.left(new PostNotFoundFailure()));
        } else {
          this.savePosts(updatedPosts);
          resolve(Either.right(undefined));
        }
      }, 2000);
    });
  }
}
