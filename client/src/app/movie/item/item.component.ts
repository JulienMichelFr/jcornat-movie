import { Component, Input } from '@angular/core';
import { MediumItemComponent } from '../../medium/item/item.component';

@Component({
  selector: 'movie-item',
  templateUrl: '../../medium/item/item.component.html',
})
export class MovieItemComponent extends MediumItemComponent {
  @Input() public data: { _id: string, title: string, rating: number, year: number, backgroundImage: string };

  constructor() {
    super();
  }
}
