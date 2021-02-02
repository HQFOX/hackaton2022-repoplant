import { gql, useQuery, QueryResult } from "@apollo/client";

export function useCharactersFilmCount(): QueryResult {
  return useQuery(
    gql`
      query GetFilmCount {
        allPeople {
          totalCount
          people {
            filmConnection {
              totalCount
            }
          }
        }
      }
    `
  );
}
