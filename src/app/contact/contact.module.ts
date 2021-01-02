import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { MeetComponent } from './meet/meet.component';


@NgModule({
  declarations: [ContactComponent, MeetComponent],
  imports: [
    CommonModule,
    ContactRoutingModule
  ],
  schemas: [NO_ERRORS_SCHEMA] 
})
export class ContactModule { }
