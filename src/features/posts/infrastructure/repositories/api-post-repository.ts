import { Injectable } from '@angular/core';
import { Post } from '@features/posts/domain/entities/post';
import {
  PostParams,
  PostRepository,
} from '@features/posts/domain/repositories/post-repository';
import { HttpStatusFailureFactory } from '@features/shared/domain/factories/http-failure-factory';
import { Either } from '@features/shared/domain/either';
import { Failure } from '@features/shared/domain/failures/failure';

@Injectable()
export class ApiPostRepository implements PostRepository {
  private api_post_url = 'http://localhost:8080/api/v1/posts';
  private readonly token = localStorage.getItem('token');

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

  async save(params: PostParams): Promise<Either<Failure, void>> {
    const formData = new FormData();

    if (params.file) {
      formData.append('file', params.file);
    }

    formData.append('title', params.title);
    formData.append('content', params.content);

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

  deleteById(id: string): Promise<Either<Failure, void>> {
    throw new Error('Method not implemented.' + id);
  }
}
