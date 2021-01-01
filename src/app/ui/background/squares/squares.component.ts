import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Theme, ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-squares',
  templateUrl: './squares.component.html',
  styleUrls: ['./squares.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SquaresComponent  {
  start$: Observable<Boolean>;
  theme$: Observable<Theme>;

  constructor(public themeService: ThemeService) {
    this.start$ = this.themeService.started$;
    this.theme$ = this.themeService.theme$;
   }


}
