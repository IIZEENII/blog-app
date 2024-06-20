import { Injectable, inject } from '@angular/core';
import { AsyncStore } from '../../../shared/infrastructure/stores/async-store';
import { Comment } from '@features/posts/domain/entities/coment';
import { CommentRepository } from '@features/posts/domain/repositories/comment-repository';
import { ApiCommentRepository } from '../repositories/api-comment-repository';

@Injectable({ providedIn: 'root' })
export class CommentStore extends AsyncStore<Comment> {
  private commentRepository: CommentRepository = inject(ApiCommentRepository);

  constructor() {
    super();
  }

  async getAllByPostId(id: string) {
    this.setAsLoading();
    const result = await this.commentRepository.getAllByPostId(id);
    result.fold(
      (failure) => this.setAsFailed(failure.message),
      (posts) => this.setAsSuccess(posts)
    );
  }
}
