import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { Theme, ThemeService } from 'src/app/services/theme.service';
import { pages, Page } from '../page/pages-data';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent implements OnInit {
  sidebarOpen = false;
  pages: Page[];
  theme$: Observable<Theme>;
  constructor(private sanitizer: DomSanitizer, public themeService: ThemeService) {
    this.pages = Object.values(pages).filter(page => page.active);
    this.theme$ = themeService.theme$;
    console.log(this.pages);
  }

  ngOnInit(): void {
  }

  get logoFile(): string {
    return `../../../assets/logos/logo-dmla-${this.themeService.getTheme}.svg`;
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  openSidebar() {
    this.sidebarOpen = true;
  }
  closeSidebar() {
    this.sidebarOpen = false;
  }
  

  sanitize(e) {
    return this.sanitizer.bypassSecurityTrustHtml(e);
  }
}
