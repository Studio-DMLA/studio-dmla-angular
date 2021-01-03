import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export enum Theme {
  Dark = 'dark',
  Light = 'light'
}

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  started = false;
  private _started = new BehaviorSubject<Boolean>(false);
  public readonly started$: Observable<Boolean> = this._started.asObservable();

  theme = Theme.Dark;
  private _theme = new BehaviorSubject<Theme>(Theme.Dark);
  public readonly theme$: Observable<Theme> = this._theme.asObservable();


  constructor() {
    // this._started.subscribe(start => console.log(start));
    // this._theme.subscribe(themed => console.log(themed));
  }

  get getTheme(): Theme {
    return this.theme;
  }

  changeTheme() {
    this._theme.next(this.theme === Theme.Dark ? Theme.Light : Theme.Dark);
    this.theme === Theme.Dark ? this.theme = Theme.Light : this.theme = Theme.Dark;
  }
  appStarted() {
    this._started.next(true);
    this.started = true;
  }
}
