import { Routes } from '@angular/router';

export const routes: Routes = [
    // TODO: remove layout from app and create own layout with children routes nested
    {
        path: 'posts',
        loadComponent: () => import('../../posts/presentation/pages/Home/Post.page'),
    },
    {
        path: 'account',
        loadComponent: () => import('../../users/presentation/pages/Account/ProfilePage'),
        pathMatch: 'full'
    },
    {
        path: 'create',
        loadComponent: () => import('../../posts/presentation/pages/CreatePostPage/CreatePost.page'),
        pathMatch: 'full'
    }
];
