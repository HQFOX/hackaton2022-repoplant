import {
  HvAssetInventory,
  HvCardView,
  HvContainer,
  HvEmptyState,
  HvGrid,
  HvStack,
} from "@hitachivantara/uikit-react-core";
import { Fail } from "@hitachivantara/uikit-react-icons";
import { HvTag } from "@hitachivantara/uikit-react-lab";
import { configuration } from "components/characters/CharactersList/utils";
import React from "react";
import { Project } from "types/project";
import cardRenderer from "./cardRenderer";
import ProjectCard from "./projectcard/ProjectCard";
import { actions } from "./utils";

// Asset Inventory configuration
const assetConfiguration = {
  metadata: [
    {
      id: "id1",
      accessor: "headerTitle",
      cellType: "alpha-numeric",
      searchable: true,
      sortable: true,
      sortableLabelAsc: "Title ascending",
      sortableLabelDesc: "Title descending",
    },
    {
      id: "id2",
      accessor: "semantic",
      cellType: "alpha-numeric",
    },
    {
      id: "id3",
      accessor: "probability",
      cellType: "numeric",
      searchable: true,
      sortable: true,
      sortableLabelAsc: "Probability ascending",
      sortableLabelDesc: "Probability descending",
    },
    {
      id: "id4",
      accessor: "timeHorizon",
      cellType: "numeric",
      sortable: true,
      sortableLabelAsc: "TimeHorizon ascending",
      sortableLabelDesc: "TimeHorizon descending",
    },
    {
      id: "id5",
      accessor: "event.schedule",
      cellType: "alpha-numeric",
      searchable: true,
    },
    {
      id: "id6",
      accessor: "event.description",
      cellType: "alpha-numeric",
      searchable: true,
    },
  ],
  viewConfiguration: {
    breakpoints: { xs: 12, sm: 6, md: 4, lg: 3, xl: 3 },
    columnConfiguration: [
      { style: { width: 1, textAlign: "center" } },
      {
        title: "Description",
        style: { minWidth: "360px", textAlign: "start" },
      },
      {
        title: "Created by",
        style: { minWidth: "195px", paddingLeft: "30px", textAlign: "start" },
      },
    ],
  },
};

// Data

const compressorData = (id: number): Project => ({
  id: id.toString(),
  title: `Hitachi Virtual Storage Platform 5000 series ${id + 1}`,
  description: `The most powerful Data platform in the world that will future proof your business and simplify day-to-dat management.`,
  creator: `John Stedward`,
});

const machineData = (id: number): Project => ({
  id: id.toString(),
  title: `CSAF ${id + 1}`,
  description: `The most powerful Data platform in the world that will future proof your business and simplify day-to-dat management.`,
  creator: `John Stedward`,
});

const values2 = (): Project[] => {
  const projects: Project[] = [];

  for (let i = 0; i < 10; i += 1) {
    projects.push(compressorData(i));
  }

  return projects;
};

const ProjectList = () => {
  return (
    <HvContainer>
      <HvGrid container>
        <HvGrid item xl={2} lg={3} md={3} sm={3} xs={3}>
          <ProjectCard
            data={
              {
                id: "0",
                title: `CSAF`,
                description: `The most powerful Data platform in the world that will future proof your business and simplify day-to-dat management.`,
                creator: `John Stedward`,
              } as Project
            }
          />
        </HvGrid>
        <HvGrid item xl={2} lg={3} md={3} sm={3} xs={3}>
          <ProjectCard
            data={
              {
                id: "0",
                title: `CSAF`,
                description: `The most powerful Data platform in the world that will future proof your business and simplify day-to-dat management.`,
                creator: `John Stedward`,
              } as Project
            }
          />
        </HvGrid>
        <HvGrid item xl={2} lg={3} md={3} sm={3} xs={3}>
          <ProjectCard
            data={
              {
                id: "0",
                title: `CSAF`,
                description: `The most powerful Data platform in the world that will future proof your business and simplify day-to-dat management.`,
                creator: `John Stedward`,
              } as Project
            }
          />
        </HvGrid>
        <HvGrid item xl={2} lg={3} md={3} sm={3} xs={3}>
          <ProjectCard
            data={
              {
                id: "0",
                title: `CSAF`,
                description: `The most powerful Data platform in the world that will future proof your business and simplify day-to-dat management.`,
                creator: `John Stedward`,
              } as Project
            }
          />
        </HvGrid>
      </HvGrid>
    </HvContainer>
  );
};

export default ProjectList;
