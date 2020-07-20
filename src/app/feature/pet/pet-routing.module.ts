import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PetListComponent } from './pet-list/pet-list.component';

const routes: Routes = [
  {
    path: '',
    component: PetListComponent
  },
  {
    path: 'pet',
    component: PetListComponent
  },
  {
    path: 'pets',
    component: PetListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PetRoutingModule { }