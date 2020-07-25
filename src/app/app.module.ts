import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbActionsModule, NbCardModule, NbCheckboxModule, NbMenuModule, NbPopoverModule, NbSearchModule, NbTabsetModule, NbUserModule, NbBadgeModule, NbContextMenuModule, NbRouteTabsetModule, NbProgressBarModule, NbAlertModule, NbSpinnerModule, NbChatModule, NbThemeService, NbSidebarService, NbIconModule, NbButtonModule, NbMenuService, NbSelectModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HomeComponent } from './feature/home/home.component';
import { MainComponent } from './core/layout/main/main.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { HeaderComponent } from './core/layout/header/header.component';
import { SharedModule } from './shared/shared.module';
import { NbMenuInternalService } from '@nebular/theme/components/menu/menu.service';
import { HomeModule } from './feature/home/home.module';

import {MatToolbarModule} from '@angular/material/toolbar';
import { MatCommonModule, MatLineSetter } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatBadgeModule } from '@angular/material/badge';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
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
    NbMenuModule.forRoot(),
    NbPopoverModule,
    NbSidebarModule.forRoot(),
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
    NbSelectModule,
    NbButtonModule,
    SharedModule,
    HomeModule,
    MatToolbarModule,
    MatBadgeModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatSelectModule,
    MatListModule
  ],
  providers:[],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
