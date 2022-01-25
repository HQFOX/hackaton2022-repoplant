import React, { useEffect, useState } from "react";
import { HvTable, TableColumn } from "@hitachivantara/uikit-react-core";

import { useStarships } from "lib/api/swapi";

const StarshipsTable = () => {
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState(0);
  const [pageSize, setPageSize] = useState(10);

  const [results, setResults] = useState([]);
  const { data } = useStarships(`?page=${page + 1}`);

  useEffect(() => {
    if (data) {
      setResults(data.results);
      setPageSize(data.results.length);

      if (pages === 0) {
        setPages(Math.ceil(data.count / 10));
      }
    }
  }, [pages, data]);

  const handlePageChange = (p: number) => {
    setPage(p);
  };

  const getColumns = (): TableColumn[] => [
    {
      headerText: "Name",
      accessor: "name",
      cellType: "alpha-numeric",
      minWidth: 150,
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
      cellType: "numeric",
      minWidth: 100,
    },
    {
      headerText: "Crew",
      accessor: "crew",
      cellType: "numeric",
      minWidth: 100,
    },
  ];

  return (
    <HvTable
      id="test"
      data={results}
      columns={getColumns()}
      showPageSize={false}
      sortable={false}
      page={page}
      pages={pages}
      pageSize={pageSize}
      paginationServerSide
      onPageChange={handlePageChange}
    />
  );
};

export default StarshipsTable;
