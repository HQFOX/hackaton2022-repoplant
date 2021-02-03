import React from "react";
import { HvTable, TableColumn } from "@hv/uikit-react-core";

export default function StarshipsTable({ data }) {
  const defaultSorted = [{ id: "episodeID", desc: false }];

  const getColumns = (): TableColumn[] => [
    {
      headerText: "Name",
      accessor: "name",
      cellType: "alpha-numeric",
    },
    {
      headerText: "Model",
      accessor: "model",
      cellType: "alpha-numeric",
    },
    {
      headerText: "Class",
      accessor: "starshipClass",
      cellType: "alpha-numeric",
    },
    {
      headerText: "Manufacturers",
      accessor: "manufacturers",
      cellType: "alpha-numeric",
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
      subElementTemplate={({ original }) => {
        console.log(original);
        return (
          <>
            <table>
              <tr>
                <th>first</th>
                <th>second</th>
              </tr>
              <tr />
            </table>
          </>
        );
      }}
    />
  );
}
