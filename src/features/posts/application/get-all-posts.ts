import { Injectable, inject } from "@angular/core";
import { Either } from "../../shared/domain/either";
import { Failure } from "../../shared/domain/failures/failure";
import { Post } from "../domain/post";
import { PostRepository } from "../domain/post-repository";
import { LocalStoragePostRepository } from "../infrastructure/local-storage-post-repository";

@Injectable()
export class GetAllPostsUsecase {
    private postRepository: PostRepository = inject(LocalStoragePostRepository);

    call(): Promise<Either<Failure, Post[]>> {
        return this.postRepository.getAll();
    }
}
