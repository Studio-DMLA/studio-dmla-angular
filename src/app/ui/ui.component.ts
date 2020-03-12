import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss']
})
export class UiComponent implements OnInit {
@Input() started: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
