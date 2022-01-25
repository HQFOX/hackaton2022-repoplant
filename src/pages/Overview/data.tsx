import { gql } from "@apollo/client";

export const QUERY_GET_SPACESHIPS = gql`
  query GetSpaceships {
    allStarships {
      edges {
        node {
          id
          name
          model
          passengers
          crew
          length
          cargoCapacity
        }
      }
    }
  }
`;
