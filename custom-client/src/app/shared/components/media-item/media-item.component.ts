import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Medium } from '../../../core/models/medium/medium.interface';

@Component({
  selector: 'app-media-item',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './media-item.component.html',
  styleUrl: './media-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MediaItemComponent {
  @Input({ required: true }) public media!: Medium;
}
