import { Injectable, inject } from "@angular/core";
import { Either } from "../../shared/domain/either";
import { Failure } from "../../shared/domain/failures/failure";
import { Post } from "../domain/post";
import { PostRepository } from "../domain/post-repository";
import { LocalPostRepository } from "../infrastructure/local-post-repository";

@Injectable()
export class CreatePostUsecase {
    private postRepository: PostRepository = inject(LocalPostRepository);

    call(post: Post): Promise<Either<Failure, void>> {
        return this.postRepository.create(post);
    }
}
