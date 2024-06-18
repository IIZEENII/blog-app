import { Either } from '@features/shared/domain/either';
import { Failure } from '@features/shared/domain/failures/failure';
import { Comment } from '../entities/coment';

export interface CommentParams {
  id?: string;
  content: string;
  postId: string;
}

export interface PostRepository {
  save(params: CommentParams): Promise<Either<Failure, void>>;
  getAllByPostId(): Promise<Either<Failure, Comment[]>>;
  deleteById(id: string): Promise<Either<Failure, void>>;
}
