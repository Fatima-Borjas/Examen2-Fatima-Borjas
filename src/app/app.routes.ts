import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'character-firestore-page',
    loadComponent: () => import('./pages/character-firestore-page/character-firestore-page.page').then( m => m.CharacterFirestorePage)
  },
  {
    path: 'comment-page',
    loadComponent: () => import('./pages/comment-page/comment-page.page').then( m => m.CommentPagePage)
  },
];
