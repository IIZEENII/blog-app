import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
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
  private file: File | undefined;
  createPostForm = new FormGroup({
    title: new FormControl(''),
    content: new FormControl(''),
    file: new FormControl(),
  });

  constructor(public postStore: PostsStore, public router: Router) {}

  ngOnInit(): void {
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChnage(event: any) {
    this.file = event.target.files[0];
  }

  onSubmit() {
    this.postStore.create({
      title: this.createPostForm.value.title!,
      content: this.createPostForm.value.content!,
      file: this.file,
    });
    this.router.navigate(['/home']);
  }
}
