import { gql } from "@apollo/client";

export const QUERY_GET_PEOPLE = gql`
  query GetPeople {
    allPeople {
      edges {
        node {
          id
          name
          birthYear
          homeworld {
            name
          }
          species {
            name
          }
          filmConnection {
            edges {
              node {
                title
              }
            }
          }
        }
      }
    }
  }
`;
