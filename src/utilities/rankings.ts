interface IRankings {
  allTime: boolean,
  rank: number,
  context: string,
  type: IRankingType,
  year: number | null
}

type IRankingType = 'POPULAR' | 'RATED';

const findRated = (item: IRankings) => 
  item.allTime &&
  item.type === 'RATED' &&
  item.year === null &&
  item

const findPopular = (item: IRankings) => 
  !item.allTime &&
  item.type === 'POPULAR' &&
  item.year === new Date().getFullYear() &&
  item

export const mostRated = (rankings: IRankings[]): number | undefined =>
  rankings.find(findRated)?.rank;

export const mostPopularYear = (rankings: IRankings[]): number | undefined => 
  rankings.find(findPopular)?.rank;