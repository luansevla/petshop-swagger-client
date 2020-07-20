import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbSidebarModule, NbMenuModule } from '@nebular/theme';
import { ProfileComponent } from './profile/profile.component';
import { UserRoutingModule } from './user-routing.module';



@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    NbSidebarModule,
    NbMenuModule
  ]
})
export class UserModule { }
