import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesCatalogComponent } from './movies/moviesCatalog.component';
import { MovieDetailsComponent } from './movies/movieDetails.component';

const routes: Routes = [
  {path:'', redirectTo:'movies',pathMatch:'full'},
  { path: 'movies', component: MoviesCatalogComponent },
  { path: 'movies/:id', component:MovieDetailsComponent  }
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule],
//   declarations:[MoviesCatalogComponent]
// })
//export class AppRoutingModule { }

export const AppRoutingModule :ModuleWithProviders = RouterModule.forRoot(routes);
export const routedComponents = [MoviesCatalogComponent];