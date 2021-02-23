import { gql, useQuery, QueryResult } from "@apollo/client";

import Overview from "./Overview";

export function useSpaceships(): QueryResult {
  return useQuery(gql`
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
  `);
}

export default Overview;
