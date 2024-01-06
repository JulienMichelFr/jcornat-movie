import { signalStore } from '@ngrx/signals';

import { withMedium } from '../../../../core/signal-store/media-signal.store';
import { MovieInterface } from '../../models/movie/movie.interface';
import { MovieService } from '../../services/movie/movie.service';

// eslint-disable-next-line @typescript-eslint/typedef
export const MovieStore = signalStore({ providedIn: 'root' }, withMedium<MovieInterface>(MovieService));
