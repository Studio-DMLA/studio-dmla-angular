import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  title: string = 'About';
  content = `<p>At Studio DMLA we believe that work should go beyond the industrial model, and we build a culture that empowers remote collaboration, autonomy, results and a shared vision.</p><p>
  We do not do business as usual. Our digital boutique have real connections with our clients, provides perspective, and solutions for problems they did not know they have.</p><p>
  We partner with the best in each field to deliver cutting-edge digital solutions to your organization while being responsible for the project management and final product.</p>`;

  constructor() { }

  ngOnInit(): void {
  }

}
