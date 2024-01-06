import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SortEnum } from '../../../core/enums/sort/sort.enum';
import { MediumStore } from '../../../core/signal-store/media-signal.store';
import { MediaListComponent } from '../../components/media-list/media-list.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-media-list-page',
  standalone: true,
  imports: [MediaListComponent, RouterLink, NavbarComponent],
  templateUrl: './media-list-page.component.html',
  styleUrl: './media-list-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MediaListPageComponent {
  @Input({ required: true }) public store!: MediumStore;

  protected onSortChange(sort: SortEnum): void {
    this.store.updateSort(sort);
  }
}
