import { Injectable } from '@angular/core';

import { BaseMediumApiService } from '../../../../core/services/base-api/base-medium-api.service';
import { GameInterface } from '../../models/game/game.interface';

@Injectable({
  providedIn: 'root',
})
export class GameService extends BaseMediumApiService<GameInterface> {
  public readonly baseUrl: string = 'api/game';
}
