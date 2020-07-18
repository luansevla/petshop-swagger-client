import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbLayoutModule, NbThemeModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule,
    //nebular
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
  ],
  exports: [
    NbLayoutModule,
    NbEvaIconsModule,
  ]
})
export class CoreModule { }
