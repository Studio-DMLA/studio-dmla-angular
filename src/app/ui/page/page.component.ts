import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageComponent implements OnInit {
  start$: Observable<Boolean>;

  constructor(
    private sanitizer: DomSanitizer,
    private route: ActivatedRoute,
    public themeService: ThemeService
  ) {
    this.start$ = this.themeService.started$;
   }

  title: string;
  content: string;

  ngOnInit(): void {
    this.title = this.route.snapshot.data.title;
    this.content = this.route.snapshot.data.content;
  }

  get logoFile(): string {
    return `../../../assets/logos/logo-dmla-${this.themeService.getTheme}.svg`;
  }

  sanitize(e) {
    return this.sanitizer.bypassSecurityTrustHtml(e);
  }
}
