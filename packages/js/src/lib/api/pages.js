const data = [
  {
    id: "1",
    label: "Overview",
    path: "/overview"
  },
  {
    id: "2",
    label: "Templates",
    path: "/templates",
    data: [
      {
        id: "2-1",
        label: "Home",
        path: "/templates/home"
      },
      {
        id: "2-2",
        label: "Details",
        path: "/templates/details"
      }
    ]
  },
  {
    id: "3",
    label: "Examples",
    path: "/examples",
    data: [
      {
        id: "3-1",
        label: "Example 1",
        path: "/examples/example1"
      },
      {
        id: "3-2",
        label: "Example 2",
        path: "/examples/example2"
      },
      {
        id: "3-3",
        label: "Example 3",
        path: "/examples/example3"
      }
    ]
  }
];

const fetchPages = async () => {
  return new Promise(resolve => {
    setTimeout(() => resolve({ data }), 500);
  });
};

export { fetchPages };
