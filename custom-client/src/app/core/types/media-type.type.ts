// eslint-disable-next-line @typescript-eslint/typedef
export const MEDIA_TYPES = ['movie', 'game', 'tv-show'] as const;
export type MediaType = (typeof MEDIA_TYPES)[number];
