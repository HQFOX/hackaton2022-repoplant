const data = [
  {
    id: "1",
    label: "Overview",
    path: "/overview"
  }
];

const fetchPages = async () => {
  return new Promise(resolve => {
    setTimeout(() => resolve({ data }), 500);
  });
};

export { fetchPages };
