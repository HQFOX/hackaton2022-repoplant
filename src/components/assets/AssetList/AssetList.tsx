import {
  HvAssetInventory,
  HvCardView,
  HvContainer,
  HvEmptyState,
  HvGrid,
  HvStack,
} from "@hitachivantara/uikit-react-core";
import React from "react";
import { Asset } from "types/asset";
import { Project } from "types/project";
import AssetCard from "./AssetCard";

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

const AssetList = () => {
  return (
    <HvContainer>
      <HvGrid container>
        <HvGrid item xl={2} lg={3} md={3} sm={3} xs={3}>
          <AssetCard
            data={
              {
                id: "0",
                title: `Multi Filter by Category`,
                description: `The most powerful Data platform in the world that will future proof your business and simplify day-to-dat management.`,
                creator: `John Stedward`,
              } as Asset
            }
          />
        </HvGrid>
        <HvGrid item xl={2} lg={3} md={3} sm={3} xs={3}>
          <AssetCard
            data={
              {
                id: "0",
                title: `Customize Dashboard`,
                description: `The most powerful Data platform in the world that will future proof your business and simplify day-to-dat management.`,
                creator: `John Stedward`,
              } as Asset
            }
          />
        </HvGrid>
        <HvGrid item xl={2} lg={3} md={3} sm={3} xs={3}>
          <AssetCard
            data={
              {
                id: "0",
                title: `User Management`,
                description: `The most powerful Data platform in the world that will future proof your business and simplify day-to-dat management.`,
                creator: `John Stedward`,
              } as Asset
            }
          />
        </HvGrid>
        <HvGrid item xl={2} lg={3} md={3} sm={3} xs={3}>
          <AssetCard
            data={
              {
                id: "0",
                title: `Chat Support`,
                description: `The most powerful Data platform in the world that will future proof your business and simplify day-to-dat management.`,
                creator: `John Stedward`,
              } as Asset
            }
          />
        </HvGrid>
      </HvGrid>
    </HvContainer>
  );
};

export default AssetList;
