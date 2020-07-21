import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { version } from './../../package.json';
import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { NbMenuItem } from '@nebular/theme/components/menu/menu.service';
import { HomeModule } from './feature/home/home.module';
import { HomeComponent } from './feature/home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public version: string = version
  title = 'app';

  constructor(private sidebarService: NbSidebarService) { }

  ngOnInit(){
    this.toggle()
  }

  toggle() {
    this.sidebarService.toggle();
  }

  items: NbMenuItem[] = [
    {
      title: 'Home',
      link: 'home',
      skipLocationChange: true,
      icon: 'home-outline',
    },
    {
      title: 'Pets',
      link: 'pet',
      skipLocationChange: true,
      icon: 'award-outline',
    },
    {
      title: 'Store',
      link: 'shop',
      skipLocationChange: true,
      icon: { icon: 'shopping-cart-outline', pack: 'eva' },
    },
    {
      title: 'User',
      link: 'user',
      skipLocationChange: true,
      icon: { icon: 'person-outline', pack: 'eva' },
    },
    // {
    //   title: 'Logout',
    //   icon: 'unlock-outline',
    // },
  ];

}
