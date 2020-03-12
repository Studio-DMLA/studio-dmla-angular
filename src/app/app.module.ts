import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { UiComponent } from './ui/ui.component';
import { SquaresComponent } from './ui/background/squares/squares.component';
import { CirclesComponent } from './ui/background/circles/circles.component';
import { CircleComponent } from './ui/background/circles/circle/circle.component';
import { BackgroundComponent } from './ui/background/background.component';
import { SidebarComponent } from './ui/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    SquaresComponent, CirclesComponent, CircleComponent, BackgroundComponent, UiComponent, SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
