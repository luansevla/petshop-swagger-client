import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbActionsModule, NbCardModule, NbCheckboxModule, NbMenuModule, NbPopoverModule, NbSearchModule, NbTabsetModule, NbUserModule, NbBadgeModule, NbContextMenuModule, NbRouteTabsetModule, NbProgressBarModule, NbAlertModule, NbSpinnerModule, NbChatModule, NbThemeService, NbSidebarService, NbIconModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HomeComponent } from './feature/home/home.component';
import { MainComponent } from './core/layout/main/main.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { HeaderComponent } from './core/layout/header/header.component';

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
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
