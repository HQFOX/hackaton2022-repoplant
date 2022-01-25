import { gql } from "@apollo/client";

export const QUERY_VEHICLE_COUNT = gql`
  query VehicleCount {
    allPeople {
      totalCount
      people {
        vehicleConnection {
          totalCount
        }
      }
    }
  }
`;
