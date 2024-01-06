import { ChangeDetectionStrategy, Component, Input, Signal, signal, WritableSignal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { catchError, debounceTime, Observable, of, switchMap, tap } from 'rxjs';

import { ImportMedia } from '../../../core/models/import-media/import-media.interface';
import { MediumStore } from '../../../core/signal-store/media-signal.store';

@Component({
  selector: 'app-media-search-page',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './media-search-page.component.html',
  styleUrl: './media-search-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MediaSearchPageComponent {
  @Input({ required: true }) public store!: MediumStore;

  protected readonly isLoading: WritableSignal<boolean> = signal<boolean>(false);
  protected readonly search: FormControl<string> = new FormControl<string>('', { nonNullable: true });
  protected readonly results: Signal<ImportMedia[]> = this.getResults();

  protected navigateBack(): void {
    // TODO: Impl
    throw new Error('Not implemented');
  }

  protected navigateAdd(): void {
    // TODO: Impl
    throw new Error('Not implemented');
  }

  protected select(result: ImportMedia): void {
    // TODO: Impl
    throw new Error('Not implemented');
  }

  private getResults(): Signal<ImportMedia[]> {
    const obs$: Observable<ImportMedia[]> = this.search.valueChanges.pipe(
      debounceTime(400),
      tap(() => this.isLoading.set(true)),
      switchMap((search) =>
        this.store.searchMediaToImport(search).pipe(
          catchError(() => {
            return of([]);
          }),
        ),
      ),
      tap(() => this.isLoading.set(false)),
    );
    return toSignal(obs$, { initialValue: [] });
  }
}
