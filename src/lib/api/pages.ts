import { PagesState } from "typings/pages";

const data = [
  {
    id: "1",
    label: "Overview",
    path: "/overview",
  },
  {
    id: "2",
    label: "Templates",
    path: "/templates",
    data: [
      {
        id: "2-1",
        label: "Assets",
        path: "/templates/assets",
      },
      {
        id: "2-2",
        label: "Details",
        path: "/templates/details",
      },
    ],
  },
];

const fetchPages = async (): Promise<PagesState> => {
  return new Promise<PagesState>((resolve) => {
    setTimeout(() => resolve({ data }), 500);
  });
};

export { fetchPages };
