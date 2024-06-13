import { Component, input } from "@angular/core";
import { AvatarComponent } from "../../../../users/presentation/ui/Avatar";
import { Post } from "../../../domain/Post";
import { OutlineButtonComponent } from "../../../../shared/presentation/ui/OutlineButton/_index";

@Component({
    standalone: true,
    selector: 'post-card',
    template: `
        <article class="post-card">
            <div class="post-card__autor">
                <avatar 
                    [avatar]="post().autor.avatar!"  
                    [username]="post().autor.username"
                 />
                <span>Adrian Mis</span>
            </div>
            <div class="post-card__body">
                <h5>{{ post().title }}</h5>
                <p> {{ post().content }}</p>
            </div>
            <img [src]="post().mediaURL" [alt]="post().title">
            <outline-button text="comments" />
        </article>  
    `,
    styleUrl: "_index.scss",
    imports: [AvatarComponent, OutlineButtonComponent],
})
export class PostCardComponent {
    post = input.required<Post>();
}