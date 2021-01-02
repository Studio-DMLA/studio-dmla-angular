import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Theme, ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BackgroundComponent implements OnInit {
  start$: Observable<Boolean>;
  theme$: Observable<Theme>;

  constructor(public themeService: ThemeService) { }

  ngOnInit(): void {
    this.start$ = this.themeService.started$;
    this.theme$ = this.themeService.theme$;
  }

}
