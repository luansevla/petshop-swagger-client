import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbActionsModule, NbCardModule, NbCheckboxModule, NbMenuModule, NbPopoverModule, NbSearchModule, NbTabsetModule, NbUserModule, NbBadgeModule, NbContextMenuModule, NbRouteTabsetModule, NbProgressBarModule, NbAlertModule, NbSpinnerModule, NbChatModule, NbThemeService, NbSidebarService, NbIconModule, NbButtonModule, NbMenuService } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HomeComponent } from './feature/home/home.component';
import { MainComponent } from './core/layout/main/main.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { HeaderComponent } from './core/layout/header/header.component';
import { SharedModule } from './shared/shared.module';
import { NbMenuInternalService } from '@nebular/theme/components/menu/menu.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NbThemeModule.forRoot(),
    NbCardModule,
    NbCheckboxModule,
    NbLayoutModule,
    NbMenuModule,
    NbPopoverModule,
    NbSidebarModule,
    NbActionsModule,
    NbSearchModule,
    NbTabsetModule,
    NbUserModule,
    NbBadgeModule,
    NbContextMenuModule,
    NbRouteTabsetModule,
    NbProgressBarModule,
    NbAlertModule,
    NbChatModule,
    NbSpinnerModule,
    NbEvaIconsModule,
    NbIconModule,
    NbButtonModule,
    SharedModule,
  ],
  providers:[],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
