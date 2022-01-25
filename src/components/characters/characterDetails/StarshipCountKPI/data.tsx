import { gql } from "@apollo/client";

export const QUERY_STARSHIP_COUNT = gql`
  query StarshipCount {
    allPeople {
      totalCount
      people {
        starshipConnection {
          totalCount
        }
      }
    }
  }
`;
