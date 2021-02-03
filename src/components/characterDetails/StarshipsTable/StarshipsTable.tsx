import React from "react";
import {
  HvTypography,
  HvGrid,
  HvTable,
  TableColumn,
} from "@hv/uikit-react-core";
import { useHistory } from "react-router-dom";
import useStyles from "./styles";

export default function StarshipsTable({ data }) {
  const defaultSorted = [{ id: "episodeID", desc: false }];
  const history = useHistory();
  const classes = useStyles();

  const getColumns = (): TableColumn[] => [
    {
      headerText: "Name",
      accessor: "name",
      cellType: "alpha-numeric",
      minWidth: 200,
    },
    {
      headerText: "Model",
      accessor: "model",
      cellType: "alpha-numeric",
      minWidth: 250,
    },
    {
      headerText: "Class",
      accessor: "starshipClass",
      cellType: "alpha-numeric",
      minWidth: 100,
    },
    {
      headerText: "Manufacturers",
      accessor: "manufacturers",
      cellType: "alpha-numeric",
      format: ({ value }) => value.join(", "),
      minWidth: 350,
    },
  ];

  return (
    <HvTable
      data={data}
      columns={getColumns()}
      showPagination={false}
      resizable={false}
      defaultSorted={defaultSorted}
      showPageSize={false}
      sortable={false}
      /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
      /* @ts-ignore */
      subElementTemplate={({ original }) => (
        <HvGrid container>
          <HvGrid item xs={12}>
            <table className={classes.table}>
              <thead>
                <tr>
                  <th>MGLT</th>
                  <th>Cargo Capacity</th>
                  <th>Consumables</th>
                  <th>Cost in Credits</th>
                  <th>Crew</th>
                  <th>Passengers</th>
                  <th>Length</th>
                  <th>Other Characters</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{original.MGLT}</td>
                  <td>{original.cargoCapacity}</td>
                  <td>{original.consumables}</td>
                  <td>{original.costInCredits}</td>
                  <td>{original.crew}</td>
                  <td>{original.passengers}</td>
                  <td>{original.length}</td>
                  <td>
                    {original.pilotConnection?.pilots.map(({ id, name }) => (
                      <HvTypography
                        variant="link"
                        component="div"
                        onClick={() =>
                          history.push(`/star-wars/characters/${id}`)
                        }
                      >
                        {name}
                      </HvTypography>
                    ))}
                  </td>
                </tr>
              </tbody>
            </table>
          </HvGrid>
        </HvGrid>
      )}
    />
  );
}
