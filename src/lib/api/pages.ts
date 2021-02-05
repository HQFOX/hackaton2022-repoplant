import { PagesState } from "typings/pages";

const pages = [
  {
    id: "1",
    label: "Overview",
    path: "/overview",
  },
  {
    id: "2",
    label: "Star Wars",
    path: "/star-wars",
    data: [
      {
        id: "2-1",
        label: "Characters",
        path: "/star-wars/characters",
      },
      {
        id: "2-2",
        label: "Starships",
        path: "/star-wars/starships",
      },
    ],
  },
];

const fetchPages = async (): Promise<PagesState> => {
  return new Promise<PagesState>((resolve) => {
    setTimeout(() => resolve({ data: pages }), 500);
  });
};

export { fetchPages, pages };
