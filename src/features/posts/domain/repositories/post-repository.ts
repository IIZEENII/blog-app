import { Either } from '../../../shared/domain/either';
import { Failure } from '../../../shared/domain/failures/failure';
import { Post } from '../entities/post';

export interface PostParams {
  id?: string;
  title: string;
  content: string;
  file?: File;
}

export interface PostRepository {
  getAll(): Promise<Either<Failure, Post[]>>;
  save(params: PostParams): Promise<Either<Failure, void>>;
  deleteById(id: string): Promise<Either<Failure, void>>;
}
