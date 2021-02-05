import React, { useState, useEffect } from "react";
import { HvTable, TableColumn } from "@hv/uikit-react-core";
import { fetchFilms } from "lib/api/swapi";

export default function FilmsTable({ films }) {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchFilms(films);
      setData(res);
    };

    fetchData();
  }, [films]);

  const defaultSorted = [{ id: "episodeID", desc: false }];

  const getColumns = (): TableColumn[] => [
    {
      headerText: "Title",
      accessor: "title",
      cellType: "alpha-numeric",
      minWidth: 200,
    },
    {
      headerText: "Director",
      accessor: "director",
      cellType: "alpha-numeric",
      minWidth: 200,
    },
    {
      headerText: "Producers",
      accessor: "producer",
      cellType: "alpha-numeric",
      minWidth: 350,
    },
    {
      headerText: "Release Date",
      accessor: "release_date",
      cellType: "alpha-numeric",
      minWidth: 150,
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
    />
  );

  return <div>Films</div>;
}
