import { trigger, transition, useAnimation, animate, state, style } from '@angular/animations';
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Theme, ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('animateIn', [
    state('initial', style({
      right: '-400%',
      width: '1px',
      height: '1px'
    })),
    state('final', style({
      right: '0',
      height: '5vw',
      width: '5vw'
    })),
    transition('initial=>final', animate('200ms')),
    transition('final=>initial', animate('100ms'))
  ]),
  ],
})
export class UiComponent implements OnInit {
start$: Observable<Boolean>;
theme$: Observable<Theme>;
Theme = Theme;

constructor(public themeService: ThemeService) { }

ngOnInit(): void {
  this.start$ = this.themeService.started$;
  this.theme$ = this.themeService.theme$;
}


  changeTheme() {
    this.themeService.changeTheme();
  }
}
