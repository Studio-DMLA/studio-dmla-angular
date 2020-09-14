import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiComponent implements OnInit {
@Input() started: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
