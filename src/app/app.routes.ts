import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./core/pages/home/home.component'),
  },
  {
    path: 'account',
    loadComponent: () => import('./user/pages/profile/profile.component'),
    pathMatch: 'full',
  },
  {
    path: 'submit',
    loadComponent: () => import('./posts/pages/submit/submit.component'),
    pathMatch: 'full',
  },
];
