import { Rating } from '../../types/rating.type';
import { Medium } from '../medium/medium.interface';

export interface GroupMedium {
  value: Rating;
  media: Medium[];
}
