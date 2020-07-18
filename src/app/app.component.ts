import { Component, ChangeDetectionStrategy } from '@angular/core';
import { version } from './../../package.json';
import { NbMenuService } from '@nebular/theme';
import { NbMenuInternalService } from '@nebular/theme/components/menu/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public version: string = version
  title = 'app';

  constructor(){}

  items = [
    { title: 'Profile' },
    { title: 'Logout' },
  ];
}
