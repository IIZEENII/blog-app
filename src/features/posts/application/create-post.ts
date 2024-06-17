import { Injectable, inject } from '@angular/core';
import { Either } from '../../shared/domain/either';
import { Failure } from '../../shared/domain/failures/failure';
import { Post } from '../domain/post';
import { PostRepository } from '../domain/post-repository';
import { ApiPostRepository } from '../infrastructure/repositories/api-post-repository';

@Injectable()
export class CreatePostUsecase {
  private postRepository: PostRepository = inject(ApiPostRepository);

  call(post: {
    title: string;
    content: string;
    file: File  | undefined;
  }): Promise<Either<Failure, void>> {
    return this.postRepository.create(post);
  }
}
