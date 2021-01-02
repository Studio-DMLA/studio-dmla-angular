import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from './contact.component';
import { MeetComponent } from './meet/meet.component';

const routes: Routes = [
  
  {
    component: MeetComponent,
    path: 'meeting'
  },
  { path: '', component: ContactComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
