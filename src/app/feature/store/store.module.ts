import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbSidebarModule, NbMenuModule } from '@nebular/theme';
import { ShopComponent } from './shop/shop.component';
import { StoreRoutingModule } from './store-rounting.module'

@NgModule({
  declarations: [ShopComponent],
  imports: [
    CommonModule,
    StoreRoutingModule,
    NbSidebarModule,
    NbMenuModule
  ]
})
export class StoreModule { }
