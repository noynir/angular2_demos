import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesCatalogComponent } from './moviesCatalog.component';
import { MovieDetailsComponent } from './movieDetails.component';
import { MovieDetailsResolve } from '../common/services/movieDetails-Resolve.service';

const routes: Routes = [
  { path: 'movies', component: MoviesCatalogComponent },
  { 
    path: 'movies/:id', 
    component:MovieDetailsComponent,
    resolve:{
      currentMovie:MovieDetailsResolve
    }
    
   }
];

export const MoviesRoutingModule :ModuleWithProviders = RouterModule.forChild(routes);
export const routedComponents = [MoviesCatalogComponent];