import { Component } from "@angular/core";
import { PostsStore } from "../../stores/post-store";
import { FilledButtonComponent } from "../../../../shared/presentation/ui/filled-button/filled-button.component";
import { RouterOutlet } from "@angular/router";

@Component({
    standalone: true,
    imports: [FilledButtonComponent, RouterOutlet],
    template: `
        <nav>
            <span class="icon-close"></span>
            <h1>Create Post</h1>
            <filled-button [isMini]="true" >
                Publish
            </filled-button>
        </nav>
        <input type="text" placeholder="Title">
        <input type="text" placeholder="body text (optional)">
    `
})
export default class CreatePostComponent {
    constructor(public postStore: PostsStore) { }
}
