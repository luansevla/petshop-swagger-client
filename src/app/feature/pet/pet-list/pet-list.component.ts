import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-pet',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.scss']
})
export class PetListComponent implements OnInit {

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
