import { Injectable } from '@angular/core';
import { Either } from '@features/shared/domain/either';
import { Failure } from '@features/shared/domain/failures/failure';
import {
  CommentParams,
  CommentRepository,
} from '@features/posts/domain/repositories/comment-repository';
import { Comment } from '@features/posts/domain/entities/coment';
import { NotFoundFailure } from '@features/shared/domain/failures/not-found-failure';

@Injectable()
export class ApiCommentRepository implements CommentRepository {
  private API_COMMENT_URL = 'http://localhost:8080/api/v1/posts';
  private readonly token = localStorage.getItem('token');

  save(params: CommentParams): Promise<Either<Failure, void>> {
    throw new Error('Method not implemented.');
  }

  async getAllByPostId(id: string): Promise<Either<Failure, Comment[]>> {
    const response = await fetch(`${this.API_COMMENT_URL}/${id}/comments`, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });

    if (!response.ok) {
      return Either.left(new NotFoundFailure());
    }

    return Either.right(await response.json());
  }

  deleteById(id: string): Promise<Either<Failure, void>> {
    throw new Error('Method not implemented.');
  }
}
