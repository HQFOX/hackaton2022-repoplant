import { gql } from "@apollo/client";

export const QUERY_FILM_COUNT = gql`
  query FilmCount {
    allPeople {
      totalCount
      people {
        filmConnection {
          totalCount
        }
      }
    }
  }
`;
