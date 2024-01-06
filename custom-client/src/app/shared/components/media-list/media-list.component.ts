import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { SortEnum } from '../../../core/enums/sort/sort.enum';
import { GroupMedium } from '../../../core/models/group-medium/group-medium.interface';
import { RatingPipe } from '../../pipes/rating/rating.pipe';
import { MediaItemComponent } from '../media-item/media-item.component';
import { SortComponent } from '../sort/sort.component';

@Component({
  selector: 'app-media-list',
  standalone: true,
  imports: [MediaItemComponent, RatingPipe, SortComponent],
  templateUrl: './media-list.component.html',
  styleUrl: './media-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MediaListComponent {
  @Input({ required: true }) public groups!: GroupMedium[];
  @Input({ required: true }) public sort!: SortEnum;

  @Output() public readonly sortChange: EventEmitter<SortEnum> = new EventEmitter<SortEnum>();
}
