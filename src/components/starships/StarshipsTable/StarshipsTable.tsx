import React, { memo, useState } from "react";
import {
  HvTable,
  TableColumn,
  HvLink,
  HvTypography,
} from "@hv/uikit-react-core";
import { useStarships } from "lib/api/swapi";

const StarshipsTable = () => {
  const [page, setPage] = useState("");
  const { data } = useStarships(page);

  const handlePageChange = (page) => {
    setPage(`?page=${page + 1}`);
  };

  const getColumns = (): TableColumn[] => [
    {
      headerText: "Name",
      accessor: "name",
      cellType: "alpha-numeric",
      minWidth: 150,
      Cell: (cellData) => {
        const id = cellData.row._original.url.split("/").slice(0, -1).pop();
        return (
          <HvLink route={`#/star-wars/starships/${id}`}>
            <HvTypography noWrap variant="link">
              {cellData.row._original.name}
            </HvTypography>
          </HvLink>
        );
      },
    },
    {
      headerText: "Model",
      accessor: "model",
      cellType: "alpha-numeric",
      minWidth: 150,
    },
    {
      headerText: "Manufacturer",
      accessor: "manufacturer",
      cellType: "alpha-numeric",
      minWidth: 150,
    },
    {
      headerText: "Cargo Capacity",
      accessor: "cargo_capacity",
      cellType: "alpha-numeric",
      minWidth: 100,
    },
    {
      headerText: "Crew",
      accessor: "crew",
      cellType: "alpha-numeric",
      minWidth: 100,
    },
  ];

  if (!data) return null;

  const { results, count } = data;
  const pages = Math.round(count / 10);

  return (
    <HvTable
      id="test"
      data={results}
      columns={getColumns()}
      showPageSize={false}
      sortable={false}
      pages={pages}
      paginationServerSide
      onPageChange={handlePageChange}
    />
  );
};

export default StarshipsTable;
