import { Injectable, inject } from '@angular/core';
import { Either } from '../../shared/domain/either';
import { Failure } from '../../shared/domain/failures/failure';
import { PostParams, PostRepository } from '../domain/repositories/post-repository';
import { ApiPostRepository } from '../infrastructure/repositories/api-post-repository';

@Injectable()
export class CreatePostUsecase {
  private postRepository: PostRepository = inject(ApiPostRepository);

  call(params: PostParams): Promise<Either<Failure, void>> {
    return this.postRepository.save(params);
  }
}
