import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Circle } from './circle/circle';

@Component({
  selector: 'app-circles',
  templateUrl: './circles.component.html',
  styleUrls: ['./circles.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CirclesComponent {

  circles: Circle[];

  constructor() {
    this.circles =  [];
    this.circleLoop();
  }

  circleLoop() {
    const circle = {position: {top: 0, left: 0}, class: 'block'};
    const interval = setInterval(() => {
      if (this.circles.length >= 59) {
        clearInterval(interval);
      }
      this.circles.push(circle);
    }, 75);
  }


}
