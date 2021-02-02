import { gql, useQuery, QueryResult } from "@apollo/client";

export function useCharactersStarshipCount(): QueryResult {
  return useQuery(
    gql`
      query GetStarshipCount {
        allPeople {
          totalCount
          people {
            starshipConnection {
              totalCount
            }
          }
        }
      }
    `
  );
}
