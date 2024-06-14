import { Component, OnInit } from "@angular/core";
import { PostsStore } from "../../stores/PostStore";
import { PostCardComponent } from "../../ui/PostCard";

@Component({
    standalone: true,
    imports: [PostCardComponent],
    template: `
        <div class="posts">
            @if (postStore.getState().isMutationLoading) {
                <p>Creating post, wating for a moment ...</p>
            }
            
            @if (!postStore.getState().isLoading) {
                @for (post of postStore.getState().data; track $index) {
                    <post-card [post]="post" />
                }
            } @else {
                <p>loading last posts</p>
            }
        </div>
    `
})
export default class PostPage implements OnInit {
    constructor(public postStore: PostsStore) { }

    ngOnInit(): void {
        this.postStore.getAll();
    }
}