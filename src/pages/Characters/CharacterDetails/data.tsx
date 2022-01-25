import { gql } from "@apollo/client";

export const QUERY_GET_CHARACTER = gql`
  query GetCharacter($id: ID) {
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
      species {
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
          maxAtmospheringSpeed
          hyperdriveRating
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
        vehicles {
          name
          model
          vehicleClass
          manufacturers
          costInCredits
          length
          crew
          passengers
          maxAtmospheringSpeed
          cargoCapacity
          consumables
          pilotConnection {
            pilots {
              id
              name
            }
          }
          id
        }
      }
    }
  }
`;
