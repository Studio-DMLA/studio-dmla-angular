import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
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
  constructor(private sanitizer: DomSanitizer) {
    this.pages = Object.values(pages).filter(page => page.active);
    console.log(this.pages);
  }

  ngOnInit(): void {
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
    console.log(e)
    return this.sanitizer.bypassSecurityTrustHtml(e);
  }
}
