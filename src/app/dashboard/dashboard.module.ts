import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorModule } from '@tinymce/tinymce-angular';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    EditorModule
  ]
})
export class DashboardModule { }
