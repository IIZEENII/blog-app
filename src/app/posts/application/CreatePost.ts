import { Injectable, inject } from "@angular/core";
import { Either } from "../../shared/domain/Either";
import { Failure } from "../../shared/domain/failures/Failure";
import { Post } from "../domain/Post";
import { PostRepository } from "../domain/PostRepository";
import { LocalPostRepository } from "../infrastructure/LocalPostRepository";

@Injectable()
export class CreatePostUsecase {
    private postRepository: PostRepository = inject(LocalPostRepository);

    call(post: Post): Promise<Either<Failure, void>> {
        return this.postRepository.create(post);
    }
}