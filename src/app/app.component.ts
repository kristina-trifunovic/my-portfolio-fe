import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PageScrollService } from 'ngx-page-scroll-core';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  icon = faMoon;
  activeSection = 1;
  mode = MODE.LIGHT;
  modes = MODE;

  constructor(
    private pageScrollService: PageScrollService,
    @Inject(DOCUMENT) private document: any
  ) {}
  
  fullPageScroll(e: HTMLElement, i:any) {
    this.pageScrollService.scroll({
      scrollTarget: e,
      document: this.document,
    });
    this.activeSection = i;
  }

  switchTheme() {
    this.icon = this.icon === faSun ? faMoon : faSun;
    this.mode = this.mode === MODE.LIGHT ? MODE.DARK : MODE.LIGHT;
  }
}

export enum MODE {
  LIGHT = 'light',
  DARK = 'dark'
}