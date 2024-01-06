import { Injectable } from '@angular/core';

import { BaseMediumApiService } from '../../../../core/services/base-api/base-medium-api.service';
import { TvShowInterface } from '../../models/tv-show/tv-show.interface';

@Injectable({
  providedIn: 'root',
})
export class TvShowService extends BaseMediumApiService<TvShowInterface> {
  public readonly baseUrl: string = 'api/serie';
}
