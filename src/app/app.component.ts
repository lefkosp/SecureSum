import { Component } from '@angular/core';
import { ActiveBtnEnum } from './shared/components/sidenav/sidenav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public activeSection: ActiveBtnEnum = ActiveBtnEnum.DASHBOARD
  title = 'securesum';

  public activeSectionChanged(evt: ActiveBtnEnum) {
    this.activeSection = evt
  }
}
