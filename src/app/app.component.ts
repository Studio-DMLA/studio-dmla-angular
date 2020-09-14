import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  started = false;
  constructor() {
    if (!document) {
      this.started = true;
    }
    this.removeInto();
  }

  removeInto() {
    if (document) {
      const main = document.getElementById('main');
      const loading = document.getElementById('loading').innerText.length * 75;
      const text = 'Hold one while we load your content...'.length * 75;
      if (main) {
        setTimeout(() => {
          main.classList.add('hiding');
        }, text - loading);
        setTimeout(() => {
          main.classList.add('hide');
          this.started = true;
        }, text - loading + 400);
      }
    }
  }
}
