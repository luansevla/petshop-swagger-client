import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

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
