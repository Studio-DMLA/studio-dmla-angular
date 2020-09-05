import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

// #TODO pick editor either Tiny or Froala, froala looks cleaner but doesn't have all the features of Tiny
// https://froala.com/wysiwyg-editor/docs/
// https://www.tiny.cloud

  constructor(private sanitizer: DomSanitizer) {
    this.tinyApiKey  = environment.tiny.apiKey;
  }

  title: string = 'About';
  content = `<p>At Studio DMLA we believe that work should go beyond the industrial model, and we build a culture that empowers remote collaboration, autonomy, results and a shared vision.</p><p>
  We do not do business as usual. Our digital boutique have real connections with our clients, provides perspective, and solutions for problems they did not know they have.</p><p>
  We partner with the best in each field to deliver cutting-edge digital solutions to your organization while being responsible for the project management and final product.</p>`;
  tinyApiKey: string;

  public options: Object = {
  };

  ngOnInit(): void {
  }

  handleEvent(e) {
    console.log({event: e, html: e.editor.iframeElement.contentDocument.all[5].childNodes[0].parentElement.innerHTML});
    this.content = e.editor.iframeElement.contentDocument.all[5].childNodes[0].parentElement.innerHTML;
  }
  sanitize(e) {
    return this.sanitizer.bypassSecurityTrustHtml(e);
  }
}
