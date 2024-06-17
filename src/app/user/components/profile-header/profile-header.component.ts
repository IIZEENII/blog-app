import { Component } from '@angular/core';
import { AvatarComponent } from '../avatar/avatar.component';
import { FilledButtonComponent } from '../../../core/components/buttons/filled-button/filled-button.component';

@Component({
  standalone: true,
  selector: 'profile-header',
  imports: [AvatarComponent, FilledButtonComponent],
  styleUrl: 'profile-header.component.scss',
  template: `
    <section class="profile-header">
      <img
        class="profile-header__banner"
        src="https://th.bing.com/th/id/R.5affa2402137d2299c80e2fc831b2a8d?rik=NHhYo3f7j2naSQ&pid=ImgRaw&r=0"
        alt=""
      />
      <div class="profile-header__profile">
        <avatar
          [size]="80"
          avatar="https://citizensketcher.com/wp-content/uploads/2022/05/thispersondoesnotexist_43-1.jpg"
          username="Adrian Mis"
        />
        <div class="profile-header__profile-info">
          <div>
            <span>Adrian Mis</span>
            <span>zeen.cr&#64;gmail.com</span>
          </div>
          <filled-button [isMini]="true">Edit profile</filled-button>
        </div>
      </div>
    </section>
  `,
})
export class ProfileHeaderComponent {}
