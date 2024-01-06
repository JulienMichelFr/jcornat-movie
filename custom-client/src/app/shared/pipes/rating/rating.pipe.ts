import { Pipe, PipeTransform } from '@angular/core';

import { Rating } from '../../../core/types/rating.type';

@Pipe({
  name: 'rating',
  standalone: true,
})
export class RatingPipe implements PipeTransform {
  public transform(value: Rating): string {
    switch (value) {
      case 6:
        return 'Favorite';
      case 5:
        return 'Amazing';
      case 4:
        return 'Great';
      case 3:
        return 'Good';
      case 2:
        return 'Disliked';
      case 1:
        return 'Would not watch again';
      case 'todo':
        return 'Todo';
      case 'progress':
        return 'In progress';
    }
  }
}
