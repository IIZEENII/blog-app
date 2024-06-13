import { Injectable } from "@angular/core";
import { Either } from "../../shared/domain/Either";
import { Failure } from "../../shared/domain/failures/Failure";
import { Post } from "../domain/Post";
import { PostRepository } from "../domain/PostRepository";
import { PostNotFoundFailure } from "../domain/failures/PostNotFoundFailure";

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

    update(id: number): Promise<Either<Failure, void>> {
        throw new Error("Method not implemented.");
    }

    delete(id: number): Promise<Either<Failure, void>> {
        throw new Error("Method not implemented.");
    }
}
