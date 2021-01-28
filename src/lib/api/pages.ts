import { PagesState } from "typings/pages";

const pages = [
  {
    id: "1",
    label: "Overview",
    path: "/overview",
    paths: ["/overview"],
  },
  {
    id: "2",
    label: "Star Wars",
    path: "/star-wars",
    paths: ["/star-wars"],
    data: [
      {
        id: "2-1",
        label: "Characters",
        path: "/star-wars/characters",
        paths: ["/star-wars/characters", "/star-wars/characters/:id"],
      },
      {
        id: "2-2",
        label: "Planets",
        path: "/star-wars/planets",
        paths: ["/star-wars/planets"],
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
