import React, { useState } from "react";

import { Container } from "components/layout";
import {
  HvButton,
  HvFilterGroup,
  HvGrid,
  HvInput,
  HvTypography,
} from "@hitachivantara/uikit-react-core";
import ProjectList from "components/projects/ProjectList";
import AddProjectDialog from "dialogs";

const Projects: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([
    ["category1", 2],
    [],
    [1, "subsubcategory2", "subsubcategory8"],
  ]);

  const filters = [
    {
      id: "category",
      name: "Category",
      data: [
        {
          id: "category1",
          name: "Categoryyyyyyyyyyyyyyyyyyyyyyyyy is a very long string 1",
        },
        { id: 2, name: "Category 2" },
        { id: "category3", name: "Category 3" },
        { id: "category4", name: "Category 4" },
      ],
    },
    {
      id: "subcategory",
      name: "Sub-Category",
      data: [
        {
          id: "subcategory1",
          name: "Sub Category Categoryyyyyyyyy is a very long string 1",
        },
        { id: "subcategory2", name: "Sub Category 2" },
        { id: "subcategory3", name: "Sub Category 3" },
        { id: "subcategory4", name: "Sub Category 4" },
      ],
    },
    {
      id: "subsubcategory",
      name: "Sub-Sub-Category Category Category Category Category Category",
      data: [
        {
          id: "subsubcategory1",
          name: "Sub sub Category 1 Categoryyyyyyyyy is a very long string",
        },
        { id: "subsubcategory2", name: "Sub sub Category 2" },
        { id: "subsubcategory3", name: "Sub sub Category 3" },
        { id: "subsubcategory4", name: "Sub sub Category 4" },
        { id: "subsubcategory5", name: "Sub sub Category 5" },
        { id: "subsubcategory6", name: "Sub sub Category 6" },
        { id: "subsubcategory7", name: "Sub sub Category 7" },
        { id: "subsubcategory8", name: "Sub sub Category 8" },
        { id: "subsubcategory9", name: "Sub sub Category 9" },
        { id: "subsubcategory10", name: "Sub sub Category 10" },
        { id: "subsubcategory11", name: "Sub sub Category 11" },
        { id: "subsubcategory12", name: "Sub sub Category 12" },
      ],
    },
  ];

  return (
    <Container>
      <HvGrid container>
        <HvGrid item style={{ width: "100%" }}>
          <HvTypography
            variant="sectionTitle"
            style={{ display: "inline-block" }}
          >
            PROJECTS
          </HvTypography>
          <HvButton
            style={{ float: "right" }}
            category="primary"
            onClick={() => setOpen(true)}
          >
            Add Project
          </HvButton>
        </HvGrid>
        <HvGrid item xl={6} lg={6} md={6} sm={6} xs={6}>
          <HvInput
            id="dynamic"
            type="search"
            placeholder="Search by project name"
            onEnter={() => {}}
          />
        </HvGrid>
        <HvGrid item xl={2} lg={2} md={6} sm={6} xs={6}>
          <HvFilterGroup
            id="example"
            value={value}
            filters={filters}
            onChange={(evt, values) => setValue(values)}
          />
        </HvGrid>
        <HvGrid item xs={12}>
          <ProjectList />
        </HvGrid>
      </HvGrid>
      <AddProjectDialog open={open} setValue={setOpen} />
    </Container>
  );
};

export default Projects;
