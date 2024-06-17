import { Either } from '../../shared/domain/either';
import { Failure } from '../../shared/domain/failures/failure';
import { Post } from './post';

export interface PostRepository {
  getAll(): Promise<Either<Failure, Post[]>>;
  getById(id: number): Promise<Either<Failure, Post>>;
  create(post: {
    title: string;
    content: string;
    file: File | undefined;
  }): Promise<Either<Failure, void>>;
  update(id: number, post: Post): Promise<Either<Failure, void>>;
  delete(id: number): Promise<Either<Failure, void>>;
}
