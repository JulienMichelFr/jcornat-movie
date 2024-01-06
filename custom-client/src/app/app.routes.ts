import { Routes } from '@angular/router';

// eslint-disable-next-line @typescript-eslint/typedef
export const Route = {
  home: 'home',
  login: 'login',
  movies: 'movies',
  tvShows: 'tv-shows',
  games: 'games',
} as const;

export const routes: Routes = [
  { path: Route.home, loadComponent: () => import('./core/pages/home/home.component').then((m) => m.HomeComponent) },
  {
    path: Route.login,
    loadComponent: () => import('./core/pages/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: Route.movies,
    loadChildren: () => import('./modules/movies/movie.routes').then((m) => m.movieRoutes),
  },
  {
    path: Route.tvShows,
    loadChildren: () => import('./modules/tv-shows/tv-show.routes').then((m) => m.tvShowRoutes),
  },
  {
    path: Route.games,
    loadChildren: () => import('./modules/games/game.routes').then((m) => m.gameRoutes),
  },
  { path: '**', pathMatch: 'full', redirectTo: Route.home },
];
