import { Component } from '@angular/core';
import { AvatarComponent } from '../../components/avatar/avatar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AvatarComponent],
  template: `
    <span class="icon-back"></span>
    <h1>Profile</h1>
    <div>
      <avatar
        avatar="https://citizensketcher.com/wp-content/uploads/2022/05/thispersondoesnotexist_43-1.jpg"
        username="Adrian Mis"
      />
      <span>Adrian Mis</span>
    </div>
  `,
})
export default class ProfileComponent { }
