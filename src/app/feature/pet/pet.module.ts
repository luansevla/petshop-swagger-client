import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbSidebarModule, NbMenuModule } from '@nebular/theme';
import { PetListComponent } from './pet-list/pet-list.component';
import { PetRoutingModule } from './pet-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [PetListComponent],
  imports: [
    CommonModule,
    PetRoutingModule,
    NbSidebarModule,
    NbMenuModule,
    MatTableModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSnackBarModule
  ],
  exports: [
    MatTableModule,
  ]
})
export class PetModule { }
