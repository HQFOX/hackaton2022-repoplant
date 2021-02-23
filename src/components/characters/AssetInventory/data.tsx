import { gql, useQuery, QueryResult } from "@apollo/client";

export function usePeople(): QueryResult {
  return useQuery(gql`
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
  `);
}
