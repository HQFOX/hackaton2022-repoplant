import { PagesState } from "typings/pages";

const data = [
  {
    id: "1",
    label: "Overview",
    path: "/overview"
  }
];

const fetchPages = async (): Promise<PagesState> => {
  return new Promise<PagesState>(resolve => {
    setTimeout(() => resolve({ data }), 500);
  });
};

export { fetchPages };
