import { Injectable } from "@angular/core";
import { Either } from "../../shared/domain/either";
import { Failure } from "../../shared/domain/failures/failure";
import { Post } from "../domain/post";
import { PostRepository } from "../domain/post-repository";
import { PostNotFoundFailure } from "../domain/failures/post-not-found-failure";

@Injectable()
export class LocalPostRepository implements PostRepository {
    private posts: Post[] = [];

    getAll(): Promise<Either<Failure, Post[]>> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(Either.right(this.posts))
            }, 1500)
        })
    }

    getById(id: number): Promise<Either<Failure, Post>> {
        const post = this.posts.find(post => post.id == id);

        return new Promise((resolve) => {
            setTimeout(() => {
                if(!post) resolve(Either.left(new PostNotFoundFailure()))
                else resolve(Either.right(post));
            }, 1500)
        })
    }

    create(post: Post): Promise<Either<Failure, void>> {
        return new Promise((resolve) => {
            setTimeout(() => {
                this.posts.push(post);
                resolve(Either.right(undefined));
            }, 2000)
        })
    }

    update(id: number, post: Post): Promise<Either<Failure, void>> {
        throw new Error("Method not implemented." + id);
    }

    delete(id: number): Promise<Either<Failure, void>> {
        throw new Error("Method not implemented." + id);
    }
}
