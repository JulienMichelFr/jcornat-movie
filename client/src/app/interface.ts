export type Rating = number | 'todo' | 'progress';

export interface RatingDisplay {
  value: Rating;
  label: string;
}

export interface Medium {
  id: string;
  title: string;
  year: number;
  rating: Rating;
  url: string;
  urlWebp: string;
}

export interface Movie extends Medium {
  //
}

export interface Game extends Medium {
  //
}

export interface Serie extends Medium {
  //
}

export type MediaType = 'movie' | 'serie' | 'game';

export interface ImportMedia {
  importId: string;
  title: string;
  year: number;
  url: string;
}

export interface GroupMedium {
  label: string;
  value: Rating;
  media: (Game | Movie | Serie)[];
}

export type GroupMediaLimit = Record<string, number>;

export type GroupMediaSort = Record<string, string>;

export interface CategoryPreview {
  title: string;
  description: string;
  url: string;
  media: Movie[] | Serie[] | Game[];
}

export interface HeaderLink {
  label: string;
  path: string;
  active?: boolean;
}
