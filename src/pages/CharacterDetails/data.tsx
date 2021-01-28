import { gql, useQuery, QueryResult } from "@apollo/client";

export function useCharacter(id): QueryResult {
  return useQuery(
    gql`
      query GetPeople($id: ID) {
        person(id: $id) {
          name
          birthYear
          eyeColor
          gender
          hairColor
          height
          mass
          skinColor
          homeworld {
            name
          }
        }
      }
    `,
    {
      variables: {
        id,
      },
    }
  );
}
