import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbSidebarModule, NbMenuModule } from '@nebular/theme';
import { PetListComponent } from './pet-list/pet-list.component';
import { PetRoutingModule } from './pet-routing.module';

@NgModule({
  declarations: [PetListComponent],
  imports: [
    CommonModule,
    PetRoutingModule,
    NbSidebarModule,
    NbMenuModule
  ]
})
export class PetModule { }
