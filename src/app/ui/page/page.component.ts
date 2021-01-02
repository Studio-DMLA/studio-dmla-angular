import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageComponent implements OnInit {

  constructor(
    private sanitizer: DomSanitizer,
    private route: ActivatedRoute
  ) { }

  title: string;
  content: string;

  ngOnInit(): void {
    this.title = this.route.snapshot.data.title;
    this.content = this.route.snapshot.data.content;
  }

  sanitize(e) {
    return this.sanitizer.bypassSecurityTrustHtml(e);
  }
}
