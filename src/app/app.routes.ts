import { Routes } from '@angular/router';
import { AuthGuard } from '@features/shared/infrastructure/http-request.interceptor';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/sign-in',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    pathMatch: 'prefix',
    loadComponent: () => import('./auth/pages/auth-layout/auth-layout.component'),
    children: [
      {
        path: 'sign-in',
        pathMatch: 'full',
        loadComponent: () => import('./auth/pages/sign-in/sign-in.component')
      },
      {
        path: 'sign-up',
        pathMatch: 'full',
        loadComponent: () => import('./auth/pages/sign-up/sign-up.component')
      }
    ]
  },
  {
    path: 'home',
    canActivate: ([AuthGuard]),
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
