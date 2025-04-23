export type Categories = 'film' | 'anime' | 'ova' | 'default';

export interface ICard {
  id: number,
  img: string,
  title: string,
  subtitle: string,
  link: string,
  time: string,
  likes: number
}