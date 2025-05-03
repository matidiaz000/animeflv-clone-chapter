import { gql } from '@apollo/client';

export const GET_ANIMES_ITEM = gql`
  query getAnimesItem($id: Int) {
    Media (id: $id) {
      id
      coverImage {
        extraLarge
        color
      }
      description
      genres
      rankings {
        allTime
        rank
        type
        year
      }
      title {
        userPreferred
        english
        native
        romaji
      }
      format
      duration
      status
      streamingEpisodes {
        title
        site
        thumbnail
        url
      }
    }
  }
`;