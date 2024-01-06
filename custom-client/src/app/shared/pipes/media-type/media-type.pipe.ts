import { Pipe, PipeTransform } from '@angular/core';

import { MediaType } from '../../../core/types/media-type.type';

@Pipe({
  name: 'mediaType',
  standalone: true,
})
export class MediaTypePipe implements PipeTransform {
  public transform(value: MediaType): string {
    switch (value) {
      case 'movie':
        return 'Movies';
      case 'game':
        return 'Games';
      case 'tv-show':
        return 'TV Shows';
    }
  }
}
