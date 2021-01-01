import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Theme, ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiComponent implements OnInit {
@Input() started: boolean;
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
