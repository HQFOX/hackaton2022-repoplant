import React from "react";

import { Container } from "components/layout";
import {
  HvButton,
  HvGrid,
  HvTypography,
} from "@hitachivantara/uikit-react-core";
import ProjectList from "components/projects/ProjectList";

const Projects: React.FC = () => {
  return (
    <Container>
      <HvGrid container>
        <HvGrid style={{ width: "100%" }}>
          <HvTypography
            variant="sectionTitle"
            style={{ display: "inline-block" }}
          >
            PROJECTS
          </HvTypography>
          <HvButton style={{ float: "right" }} category="primary">
            Add Project
          </HvButton>
        </HvGrid>
        <HvGrid item xs={12}>
          <ProjectList />
        </HvGrid>
      </HvGrid>
    </Container>
  );
};

export default Projects;
