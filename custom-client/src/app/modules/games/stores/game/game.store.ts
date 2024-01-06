import { signalStore } from '@ngrx/signals';

import { withMedium } from '../../../../core/signal-store/media-signal.store';
import { GameInterface } from '../../models/game/game.interface';
import { GameService } from '../../services/game/game.service';

// eslint-disable-next-line @typescript-eslint/typedef
export const GameStore = signalStore({ providedIn: 'root' }, withMedium<GameInterface>(GameService));
