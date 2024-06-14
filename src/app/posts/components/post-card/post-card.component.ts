import { Component, input } from "@angular/core";
import { AvatarComponent } from "../../../user/components/avatar/avatar.component";
import { OutlineButtonComponent } from "../../../core/components/buttons/outline-button/outline-button.component";
import { Post } from "../../../../features/posts/domain/post";

@Component({
    standalone: true,
    selector: 'post-card',
    template: `
        <article class="post-card">
            <div class="post-card__header">
                <div class="post-card__autor">
                    <avatar
                        [avatar]="post().autor.avatar!"
                        [username]="post().autor.username"
                     />
                    <span>Adrian Mis</span>

                </div>
                <span class="icon-dots"></span>
            </div>
            <div class="post-card__body">
                <h5 class="post-card__title">{{ post().title }}</h5>
                <p class="post-card__content"> {{ post().content }}</p>
            </div>
            <img class="post-card__media" [src]="post().mediaURL" [alt]="post().title">
            <outline-button>
                <span class="icon-comment post-card__icon"></span>
                Comments
            </outline-button>
        </article>
    `,
    styleUrl: "post-card.component.scss",
    imports: [AvatarComponent, OutlineButtonComponent],
})
export class PostCardComponent {
    post = input.required<Post>();
}
