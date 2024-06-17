import { Injectable } from '@angular/core';
import { Either } from '../../../shared/domain/either';
import { Failure } from '../../../shared/domain/failures/failure';
import { Post } from '../../domain/post';
import { PostRepository } from '../../domain/post-repository';
import { HttpStatusFailureFactory } from '@features/shared/domain/factories/http-failure-factory';

@Injectable()
export class ApiPostRepository implements PostRepository {
  private api_post_url = 'http://localhost:8080/api/v1/posts';
  private readonly token = localStorage.getItem('access_token');

  async getAll(): Promise<Either<Failure, Post[]>> {
    const response = await fetch(this.api_post_url, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });

    if (!response.ok) {
      return Either.left(
        HttpStatusFailureFactory.createFailure(response.status)
      );
    }

    return Either.right(await response.json());
  }

  getById(id: number): Promise<Either<Failure, Post>> {
    throw new Error();
  }

  async create(post: {
    title: string;
    content: string;
    file: File;
  }): Promise<Either<Failure, void>> {
    const formData = new FormData();

    if (post.file) {
      formData.append('file', post.file);
    }

    formData.append('title', post.title);
    formData.append('content', post.content);

    const response = await fetch(this.api_post_url, {
      method: 'post',
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
      body: formData,
    });

    if (!response.ok) {
      return Either.left(
        HttpStatusFailureFactory.createFailure(response.status)
      );
    }

    return Either.right(undefined);
  }

  update(id: number, post: Post): Promise<Either<Failure, void>> {
    throw new Error();
  }

  delete(id: number): Promise<Either<Failure, void>> {
    throw new Error('Method not implemented.' + id);
  }
}
