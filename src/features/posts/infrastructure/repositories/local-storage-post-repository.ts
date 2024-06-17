import { Injectable } from '@angular/core';
import { Either } from '../../../shared/domain/either';
import { Failure } from '../../../shared/domain/failures/failure';
import { Post } from '../../domain/post';
import { PostRepository } from '../../domain/post-repository';
import { PostNotFoundFailure } from '../../domain/failures/post-not-found-failure';

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

  getById(id: number): Promise<Either<Failure, Post>> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const posts = this.loadPosts();
        const post = posts.find((post) => post.id === id);
        if (!post) resolve(Either.left(new PostNotFoundFailure()));
        else resolve(Either.right(post));
      }, 1500);
    });
  }

  create(post: Post): Promise<Either<Failure, void>> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const posts = this.loadPosts();
        posts.push(post);
        this.savePosts(posts);
        resolve(Either.right(undefined));
      }, 2000);
    });
  }

  update(id: number, post: Post): Promise<Either<Failure, void>> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const posts = this.loadPosts();
        const index = posts.findIndex((post) => post.id === id);
        if (index === -1) {
          resolve(Either.left(new PostNotFoundFailure()));
        } else {
          posts[index] = post;
          this.savePosts(posts);
          resolve(Either.right(undefined));
        }
      }, 2000);
    });
  }

  delete(id: number): Promise<Either<Failure, void>> {
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
