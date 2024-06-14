import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full'
  },
  // TODO: remove layout from app and create own layout with children routes nested
  {
    path: 'posts',
    loadComponent: () =>
      import('./posts/presentation/pages/posts/post.component'),
  },
  {
    path: 'account',
    loadComponent: () =>
      import('./users/presentation/pages/profile/profile.component'),
    pathMatch: 'full',
  },
  {
    path: 'create',
    loadComponent: () =>
      import('./posts/presentation/pages/create-post/create-post.component'),
    pathMatch: 'full',
  },
];
