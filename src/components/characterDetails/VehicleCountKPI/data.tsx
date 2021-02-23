import { gql, useQuery, QueryResult } from "@apollo/client";

export function useCharactersVehicleCount(): QueryResult {
  return useQuery(
    gql`
      query GetVehicleCount {
        allPeople {
          totalCount
          people {
            vehicleConnection {
              totalCount
            }
          }
        }
      }
    `
  );
}
