import { gql } from '@apollo/client';

export const GET_ANIMES_DESCRIPTION = gql`
  query getAnimesDescription($id: Int) {
    Media (id: $id) {
      id
      title {
        userPreferred
        english
        native
        romaji
      }
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