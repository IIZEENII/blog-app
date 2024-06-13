import { Injectable, inject } from "@angular/core";
import { Either } from "../../shared/domain/Either";
import { Failure } from "../../shared/domain/failures/Failure";
import { Post } from "../domain/Post";
import { PostRepository } from "../domain/PostRepository";
import { LocalPostRepository } from "../infrastructure/LocalPostRepository";

@Injectable()
export class GetAllPostsUsecase {
    private postRepository: PostRepository = inject(LocalPostRepository);

    call(): Promise<Either<Failure, Post[]>> {
        return this.postRepository.getAll();
    }
}