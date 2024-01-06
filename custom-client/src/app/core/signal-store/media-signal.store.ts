import { computed, inject, Signal } from '@angular/core';
import { tapResponse } from '@ngrx/operators';
import { patchState, signalStoreFeature, withComputed, withHooks, withMethods, withState } from '@ngrx/signals';
import { EntityId, removeAllEntities, setEntities, withEntities } from '@ngrx/signals/entities';
import { EntityMap } from '@ngrx/signals/entities/src/models';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { debounceTime, distinctUntilChanged, pipe, switchMap, tap } from 'rxjs';

import { SortEnum } from '../enums/sort/sort.enum';
import { GroupMedium } from '../models/group-medium/group-medium.interface';
import { Medium } from '../models/medium/medium.interface';
import { BaseMediumApiService } from '../services/base-api/base-medium-api.service';
import { Rating } from '../types/rating.type';

export type WithMediumState = { search: string; limit: 20 | 50 | 100; isLoading: boolean; selectedId: EntityId | null; sort: SortEnum };

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function withMedium<T extends Medium>(service: typeof BaseMediumApiService<T>) {
  return signalStoreFeature(
    withState<WithMediumState>({ search: '', limit: 20, isLoading: false, selectedId: null, sort: SortEnum.random }),
    withEntities<T>(),
    withComputed((store) => ({
      totals: computed(() => store.entities().length),
      selected: computed(() => {
        const selectedId: EntityId | null = store.selectedId();
        if (!selectedId) {
          return null;
        }
        return store.entityMap()[selectedId];
      }),
      groups: computed((): GroupMedium[] => {
        const entities: T[] = store.entities();
        const sort: SortEnum = store.sort();

        const lists: GroupMedium[] = entities.reduce((acc: GroupMedium[], entity: T) => {
          let found: GroupMedium | undefined = acc.find(({ value }) => value === entity.rating);
          if (!found) {
            found = { value: entity.rating, media: [] };
            acc.push(found);
          }
          found.media.push(entity);
          return acc;
        }, [] satisfies GroupMedium[]);

        return lists
          .map((group) => ({
            ...group,
            media: sortMedia(group.media, sort),
          }))
          .sort((a, b) => {
            function toInt(value: Extract<Rating, 'progress' | 'todo'>): -1 | -2 {
              if (value === 'todo') {
                return -1;
              }
              return -2;
            }

            const first: number = typeof a.value === 'number' ? a.value : toInt(a.value);
            const second: number = typeof b.value === 'number' ? b.value : toInt(b.value);
            return first > second ? -1 : 1;
          });
      }),
    })),
    withMethods((store) => {
      const apiService: BaseMediumApiService<T> = inject<BaseMediumApiService<T>>(service);
      return {
        updateSort(sort: SortEnum): void {
          patchState(store, { sort });
        },
        load: rxMethod<string>(
          pipe(
            debounceTime(300),
            distinctUntilChanged(),
            tap(() => patchState(store, { isLoading: true })),
            switchMap((search: string) =>
              apiService.getAll(search).pipe(
                tapResponse({
                  next: (movies) => {
                    patchState(store, setEntities(movies));
                  },
                  error: () => {
                    patchState(store, removeAllEntities());
                  },
                  finalize: () => {
                    patchState(store, { isLoading: false });
                  },
                }),
              ),
            ),
          ),
        ),
      };
    }),
    withHooks({
      // eslint-disable-next-line @typescript-eslint/typedef
      onInit(store) {
        console.log(`store inited for ${service.name}`);

        store.load(store.search());
      },
    }),
  );
}

export interface MediumStore<T extends Medium = Medium> {
  search: Signal<string>;
  limit: Signal<20 | 50 | 100>;
  sort: Signal<SortEnum>;
  isLoading: Signal<boolean>;
  selectedId: Signal<EntityId | null>;
  totals: Signal<number>;
  selected: Signal<T | null>;
  groups: Signal<GroupMedium[]>;
  entities: Signal<T[]>;
  entityMap: Signal<EntityMap<T>>;
  ids: Signal<EntityId[]>;
  load(search: string): void;
  updateSort(sort: SortEnum): void;
}

function sortMedia(list: Medium[], sort: SortEnum): Medium[] {
  const result: Medium[] = structuredClone(list);
  switch (sort) {
    case SortEnum.random:
      return shuffleMedia(result);
    case SortEnum.alphabetic:
      return result.sort((a, b) => a.title.toLocaleLowerCase().localeCompare(b.title.toLocaleUpperCase()));
    case SortEnum.alphabeticReverse:
      return result.sort((a, b) => b.title.toLocaleLowerCase().localeCompare(a.title.toLocaleUpperCase()));
    case SortEnum.mostRecent:
      return result.sort((a, b) => (a.year >= b.year ? 1 : -1));
    case SortEnum.leastRecent:
      return result.sort((a, b) => (a.year < b.year ? 1 : -1));
    case SortEnum.lastAdded:
      return result.reverse();
  }
}

function shuffleMedia(list: Medium[]): Medium[] {
  const clone: Medium[] = structuredClone(list);
  for (let i: number = list.length - 1; i > 0; i--) {
    const j: number = Math.floor(Math.random() * (i + 1));
    [list[i], list[j]] = [list[j], list[i]];
  }

  return clone;
}
