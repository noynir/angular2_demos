import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesCatalogComponent } from './moviesCatalog.component';
import { MovieDetailsComponent } from './movieDetails.component';
import { MovieEditDetailsComponent } from './movieEditDetails.component';
import { MovieDetailsResolve } from '../common/services/movieDetails-Resolve.service';
import { MoviesCanDeactivateGuard } from './movies-can-deactivate-guard.service';
import { MovieImageComponent } from './movieImage.component';

const routes: Routes = [
  { path: 'movies', component: MoviesCatalogComponent },
  { 
    path: 'movies/:id',
    component:MovieEditDetailsComponent,
    children:[
      {
        path: 'edit', 
        component:MovieDetailsComponent, 
        resolve:{
          currentMovie:MovieDetailsResolve
        },  
        canDeactivate:[MoviesCanDeactivateGuard]
      },
      { 
        path:'poster', 
        component: MovieImageComponent,
        resolve:{
          currentMovie:MovieDetailsResolve
        }
      }
    ]
   }
];

export const MOVIES_ROUTING_PROVIDERS=[MoviesCanDeactivateGuard];
export const MoviesRoutingModule :ModuleWithProviders = RouterModule.forChild(routes);
export const routedComponents = [MoviesCatalogComponent];