import { Component } from "@angular/core";
import { PostsStore } from "../../stores/PostStore";
import { FilledButtonComponent } from "../../../../shared/presentation/ui/FilledButton/FilledButton.component";
import { RouterOutlet } from "@angular/router";

@Component({
    standalone: true,
    imports: [FilledButtonComponent, RouterOutlet],
    template: `
        <nav>
            <span class="icon-close"></span>
            <h1>Create Post</h1>
            <filled-button [isMini]="true" [onClick]="load">
                Publish
            </filled-button>
        </nav>
        <input type="text" placeholder="Title">
        <input type="text" placeholder="body text (optional)">
    `
})
export default class CreatePostPage {
    constructor(public postStore: PostsStore) { }

    ngOnInit(): void {
        this.postStore.getAll();
    }

    load() {}
}