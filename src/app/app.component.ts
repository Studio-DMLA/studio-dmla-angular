import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Theme, ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  constructor(private themeService: ThemeService) {
    if (!document) {
      this.themeService.appStarted();
    }
    this.removeInto();
  }

  removeInto() {
    if (document) {
      this.themeService.theme$.subscribe(theme => {
          const body = document.getElementById('body');
          if(theme === Theme.Light) {
            body.classList.remove(Theme.Dark);
            body.classList.add(Theme.Light);
          }
          if(theme === Theme.Dark) {
            body.classList.remove(Theme.Light);
            body.classList.add(Theme.Dark);
          }
      });
      const main = document.getElementById('main');
      const loading = document.getElementById('loading').innerText.length * 75;
      const text = 'Hold one while we load your content...'.length * 75;
      if (main) {
        setTimeout(() => {
          main.classList.add('hiding');
          this.themeService.appStarted();
        }, text - loading);
        setTimeout(() => {
          main.classList.add('hide');
        }, text - loading + 400);
      }
    }
  }
}
