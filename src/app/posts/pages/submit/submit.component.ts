import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { PostsStore } from '../../../../features/posts/infrastructure/stores/post-store';
import { TextFieldComponent } from '../../../core/components/forms/text-field/text-field.component';
import { TextBoxComponent } from '../../../core/components/forms/text-box/text-box.component';
import { HeaderSectionComponent } from '../../../core/components/navigators/header-section/header-section.component';

@Component({
  standalone: true,
  imports: [
    HeaderSectionComponent,
    TextFieldComponent,
    TextBoxComponent,
    RouterOutlet,
    ReactiveFormsModule,
  ],
  templateUrl: 'submit.component.html',
  styleUrl: 'submit.component.scss',
})
export default class SubmitComponent implements OnInit {
  createPostForm = new FormGroup({
    title: new FormControl(''),
    content: new FormControl(''),
  });

  constructor(public postStore: PostsStore, public router: Router) {}

  ngOnInit(): void {
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    this.postStore.create({
      id: 1,
      title: this.createPostForm.value.title!,
      content: this.createPostForm.value.content!,
      autor: {
        username: 'Adrian Mis',
        email: '',
        id: 1,
        avatar:
          'https://th.bing.com/th/id/OIP.GayIk_M3Fq2mncGNrrS_HgHaHa?w=175&h=180&c=7&r=0&o=5&pid=1.7',
      },
      mediaURL:
        'https://th.bing.com/th/id/OIP.DGi3R9vrxTro1jZhB3bkZQHaEo?rs=1&pid=ImgDetMain',
    });
    this.router.navigate(['/home']);
  }
}
