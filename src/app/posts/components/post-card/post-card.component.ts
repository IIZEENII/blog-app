import { Component, OnInit, inject, input, signal } from '@angular/core';
import { AvatarComponent } from '../../../user/components/avatar/avatar.component';
import { OutlineButtonComponent } from '../../../core/components/buttons/outline-button/outline-button.component';
import { Post } from '../../../../features/posts/domain/entities/post';
import { JsonPipe } from '@angular/common';
import { CommentStore } from '@features/posts/infrastructure/stores/comment-store';
import { ApiCommentRepository } from '@features/posts/infrastructure/repositories/api-comment-repository';

@Component({
  standalone: true,
  selector: 'post-card',
  imports: [AvatarComponent, OutlineButtonComponent, JsonPipe],
  providers: [CommentStore, ApiCommentRepository],
  template: `
    <article class="post-card">
      <div class="post-card__header">
        <div class="post-card__autor">
          <avatar
            [avatar]="post().user.avatar"
            [username]="post().user.username"
          />
          <span>Adrian Mis</span>
        </div>
        <span class="icon-dots"></span>
      </div>
      <div class="post-card__body">
        <h5 class="post-card__title">{{ post().title }}</h5>
        <p class="post-card__content">{{ post().content }}</p>
      </div>
      @if (post().multimediaURL) {
      <img
        class="post-card__media"
        [src]="post().multimediaURL"
        [alt]="post().title"
      />
      }
      <outline-button [onClick]="hideComments">
        <span class="icon-comment post-card__icon"></span>
        Comments
      </outline-button>

      @if (areCommentsShowed()) {
        @if(!commentStore.getState().isLoading) {
          <pre> {{ commentStore.getState().data | json }} </pre>
        } @else {
          <p>Loading comments</p>
        }
      }
    </article>
  `,
  styleUrl: 'post-card.component.scss',
})
export class PostCardComponent implements OnInit {
  post = input.required<Post>();
  areCommentsShowed = signal(false);
  commentStore = inject(CommentStore);

  ngOnInit(): void {
    this.showComments = this.showComments.bind(this);
    this.hideComments = this.hideComments.bind(this);
  }

  showComments() {
    this.areCommentsShowed.set(true);
  }

  hideComments() {
    this.areCommentsShowed.set(!this.areCommentsShowed());
    this.commentStore.getAllByPostId(this.post().id);
  }
}
