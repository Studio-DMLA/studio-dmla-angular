import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';

import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

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
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
