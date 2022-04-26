import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';

import { environment } from '../environments/environment';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';

import { UiComponent } from './ui/ui.component';
import { SquaresComponent } from './ui/background/squares/squares.component';
import { CirclesComponent } from './ui/background/circles/circles.component';
import { CircleComponent } from './ui/background/circles/circle/circle.component';
import { BackgroundComponent } from './ui/background/background.component';
import { SidebarComponent } from './ui/sidebar/sidebar.component';
import { PageComponent } from './ui/page/page.component';
import { LazyImagesDirective } from './tools/lazy-images/lazy-images.directive';

@NgModule({
  declarations: [
    AppComponent,
    SquaresComponent,
    CirclesComponent,
    CircleComponent,
    BackgroundComponent,
    UiComponent,
    SidebarComponent,
    PageComponent,
    LazyImagesDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
