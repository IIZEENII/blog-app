import { Injectable } from "@angular/core";
import { AsyncStore } from "../../../shared/presentation/stores/AsyncStore";
import { GetAllPostsUsecase } from "../../application/GetAllPosts";
import { CreatePostUsecase } from "../../application/CreatePost";
import { Post } from "../../domain/Post";

@Injectable()
export class PostsStore extends AsyncStore<Post> {
    constructor(
        private createPostUsecase: CreatePostUsecase,
        private getAllPostUsecase: GetAllPostsUsecase,
    ) {
        super();
    }

    async create(post: Post) {
        this.setMutationAsLoading()
        const posts = [...this.getState().data, post];
        const result = await this.createPostUsecase.call(post);
        result.fold(
            (failure) => this.setAsFailed(failure.message),
            (_) => this.setAsSuccess(posts),
        );
    }

    async getAll() {
        this.setAsLoading();
        const result = await this.getAllPostUsecase.call();
        result.fold(
            (failure) => this.setAsFailed(failure.message),
            (posts) => this.setAsSuccess(posts),
        );
    }
}