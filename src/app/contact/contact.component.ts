import { temporaryDeclaration } from '@angular/compiler/src/compiler_util/expression_converter';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemeService } from '../services/theme.service';
declare const hbspt: any; 

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  start$: Observable<Boolean>;

  constructor(public themeService: ThemeService) {
    this.start$ = this.themeService.started$;
   }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    hbspt.forms.create({
    portalId: "6868694",
    formId: "c27e0357-f5de-455d-80bb-1c8387b145f0",
    target: "#hubspotForm"
    });
    window.scrollTo(0, 0); 
  }
}
