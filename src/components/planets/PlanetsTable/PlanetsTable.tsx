import React, { useState, useEffect } from "react";
import { HvTable, TableColumn } from "@hv/uikit-react-core";
import { fetchPlanets } from "lib/api/planets";

export default function PlanetsTable() {
  const size = 10;
  const [data, setData] = useState([]);
  const [pages, setPages] = useState(0);
  const [nextURL, setNextURL] = useState(undefined);

  const fetchData = async () => {
    const res = await fetchPlanets(nextURL);
    const { count, results, next } = res;

    setData(results);
    setPages(count);
    setNextURL(next);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); //

  const getColumns = (): TableColumn[] => [
    {
      headerText: "Name",
      accessor: "name",
      cellType: "alpha-numeric",
      minWidth: 200,
    },
    {
      headerText: "Diameter",
      accessor: "diameter",
      cellType: "alpha-numeric",
      minWidth: 250,
    },
    {
      headerText: "Gravity",
      accessor: "gravity",
      cellType: "alpha-numeric",
      minWidth: 100,
    },
    {
      headerText: "Orbital Period",
      accessor: "orbital_period",
      cellType: "alpha-numeric",
      minWidth: 100,
    },
  ];

  return (
    <HvTable
      id="test"
      data={data}
      columns={getColumns()}
      pageSize={size}
      pages={pages / size}
      defaultSorted={[{ id: "name", desc: false }]}
      paginationServerSide
      onFetchData={fetchData} // Request new data when things change
    />
  );
}
