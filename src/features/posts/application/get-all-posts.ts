import { Injectable, inject } from "@angular/core";
import { Either } from "../../shared/domain/either";
import { Failure } from "../../shared/domain/failures/failure";
import { Post } from "../domain/entities/post";
import { PostRepository } from "../domain/repositories/post-repository";
import { ApiPostRepository } from "../infrastructure/repositories/api-post-repository";

@Injectable()
export class GetAllPostsUsecase {
    private postRepository: PostRepository = inject(ApiPostRepository);

    call(): Promise<Either<Failure, Post[]>> {
        return this.postRepository.getAll();
    }
}
