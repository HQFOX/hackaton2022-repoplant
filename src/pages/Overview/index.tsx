import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import { gql, useQuery, QueryResult } from "@apollo/client";

import styles from "./styles";
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

export type OverviewProps = WithStyles<typeof styles>;

export default withStyles(styles, { name: "Overview" })(Overview);
