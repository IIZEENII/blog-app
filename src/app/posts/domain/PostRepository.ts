import { Either } from "../../shared/domain/Either";
import { Failure } from "../../shared/domain/failures/Failure";
import { Post } from "./Post";

export interface PostRepository {
    getAll(): Promise<Either<Failure, Post[]>>;
    getById(id: number): Promise<Either<Failure, Post>>;
    create(post: Post): Promise<Either<Failure, void>>;
    update(id: number): Promise<Either<Failure, void>>;
    delete(id: number): Promise<Either<Failure, void>>;
}