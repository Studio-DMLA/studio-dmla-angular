import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-squares',
  templateUrl: './squares.component.html',
  styleUrls: ['./squares.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SquaresComponent  {

   constructor() {
   }


}
