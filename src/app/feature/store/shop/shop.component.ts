import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  constructor(private sidebarService: NbSidebarService) { }

  ngOnInit() {
    this.collapse()
  }

  toggle() {
    this.sidebarService.toggle();
  }

  collapse() {
    this.sidebarService.collapse()
  }

}
