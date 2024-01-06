import { signalStore } from '@ngrx/signals';

import { withMedium } from '../../../../core/signal-store/media-signal.store';
import { TvShowInterface } from '../../models/tv-show/tv-show.interface';
import { TvShowService } from '../../services/tv-show/tv-show.service';

// eslint-disable-next-line @typescript-eslint/typedef
export const TvShowStore = signalStore({ providedIn: 'root' }, withMedium<TvShowInterface>(TvShowService));
