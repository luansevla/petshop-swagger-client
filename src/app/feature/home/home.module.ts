import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { NbSidebarModule, NbMenuModule, NbCardModule, NbButtonModule } from '@nebular/theme';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        NbSidebarModule,
        NbMenuModule,
        NbCardModule,
        NbButtonModule
    ],
    providers: [],
})
export class HomeModule { }