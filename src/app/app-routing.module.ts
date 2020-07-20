import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './core/layout/main/main.component';
import { HomeComponent } from './feature/home/home.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./feature/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'pet',
    loadChildren: () => import('./feature/pet/pet.module').then(m => m.PetModule)
  },
  {
    path: 'shop',
    loadChildren: () => import('./feature/store/store.module').then(m => m.StoreModule)
  },
  {
    path: 'buy-now',
    loadChildren: () => import('./feature/store/store.module').then(m => m.StoreModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./feature/user/user.module').then(m => m.UserModule)
  },
  {
    path: '**',
    loadChildren: () => import('./feature/not-found/not-found.module').then(m => m.NotFoundModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
