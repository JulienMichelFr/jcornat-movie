import { Pipe, PipeTransform } from '@angular/core';

import { SortEnum } from '../../../core/enums/sort/sort.enum';

@Pipe({
  name: 'sort',
  standalone: true,
})
export class SortPipe implements PipeTransform {
  public transform(value: SortEnum): string {
    switch (value) {
      case SortEnum.random:
        return 'Random';
      case SortEnum.alphabetic:
        return 'A-Z';
      case SortEnum.alphabeticReverse:
        return 'Z-A';
      case SortEnum.mostRecent:
        return 'Most recent';
      case SortEnum.leastRecent:
        return 'Least recent';
      case SortEnum.lastAdded:
        return 'Last added';
    }
  }
}
