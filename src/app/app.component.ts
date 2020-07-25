import { Component, ChangeDetectionStrategy, OnInit, ViewChild } from '@angular/core';
import { version } from './../../package.json';
import { HomeModule } from './feature/home/home.module';
import { HomeComponent } from './feature/home/home.component';
import { MatSidenav } from '@angular/material/sidenav';
import { NbSidebarService } from '@nebular/theme';
import { RouterModule, RouterLinkActive, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public version: string = version
  title = 'app';

  constructor(
    private sidebarService: NbSidebarService,
    private router: Router

    ) { }

  ngOnInit() {
    this.collapse()
  }

  changeComponent(route: String) {
    this.router.navigate(['/', route]);
    this.sidenav.close();
  }

  toggle() {
    this.sidebarService.toggle();
  }

  collapse() {
    this.sidebarService.collapse()
  }

  @ViewChild('sidenav') sidenav: MatSidenav;

  reason = '';

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

  
}
