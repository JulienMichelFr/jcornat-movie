import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SortEnum } from '../../../core/enums/sort/sort.enum';
import { SortPipe } from '../../pipes/sort/sort.pipe';

@Component({
  selector: 'app-sort',
  standalone: true,
  imports: [FormsModule, SortPipe],
  templateUrl: './sort.component.html',
  styleUrl: './sort.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SortComponent {
  @Input({ required: true }) public sort!: SortEnum;
  @Output() public readonly sortChange: EventEmitter<SortEnum> = new EventEmitter<SortEnum>();

  protected readonly sorts: SortEnum[] = Object.values(SortEnum);
}
