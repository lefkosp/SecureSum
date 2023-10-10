
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

export enum ActiveBtnEnum {
  DASHBOARD = 'dashboard',
  ANALYTICS = 'analytics',
  CALENDAR = 'calendar'
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  @Output() activeButtonEmit = new EventEmitter()
  public showSidenav: boolean = false
  public activeButton: ActiveBtnEnum = ActiveBtnEnum.DASHBOARD
  constructor(private overlayContainer: OverlayContainer) {}

  ngOnInit(): void {}

  public activeButtonChange(btnClick: string) {
    this.activeButton = ActiveBtnEnum[btnClick.toUpperCase() as keyof typeof ActiveBtnEnum];
    this.activeButtonEmit.emit(this.activeButton);
  }
}
