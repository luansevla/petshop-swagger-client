import { Component, ChangeDetectionStrategy } from '@angular/core';
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
export class AppComponent {
  public version: string = version
  title = 'app';

  constructor(private sidebarService: NbSidebarService) { }

  toggle() {
    this.sidebarService.toggle(false, 'left');
  }

  items: NbMenuItem[] = [
    {
      title: 'Home',
      link: 'home',
      icon: 'home-outline',
    },
    {
      title: 'Pets',
      icon: 'award-outline',
    },
    {
      title: 'Store',
      icon: { icon: 'shopping-cart-outline', pack: 'eva' },
    },
    {
      title: 'User',
      icon: { icon: 'person-outline', pack: 'eva' },
    },
    {
      title: 'Logout',
      icon: 'unlock-outline',
    },
  ];
}
