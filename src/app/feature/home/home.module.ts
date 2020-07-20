import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { NbSidebarModule, NbMenuModule } from '@nebular/theme';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        NbSidebarModule,
        NbMenuModule
    ],
    providers: [],
})
export class HomeModule { }