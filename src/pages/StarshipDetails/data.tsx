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
          filmConnection {
            totalCount
            films {
              title
              episodeID
              openingCrawl
              director
              producers
              releaseDate
            }
          }
          starshipConnection {
            totalCount
            starships {
              id
              name
              model
              starshipClass
              costInCredits
              length
              passengers
              crew
              MGLT
              manufacturers
              consumables
              cargoCapacity
              pilotConnection {
                pilots {
                  id
                  name
                }
              }
            }
          }
          vehicleConnection {
            totalCount
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
