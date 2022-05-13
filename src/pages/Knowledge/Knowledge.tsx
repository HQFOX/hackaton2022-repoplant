import React, { useState } from "react";
import {
  getTheme,
  HvButton,
  HvContainer,
  HvDialog,
  HvDialogActions,
  HvDialogContent,
  HvDialogTitle,
  HvFilterGroup,
  HvGrid,
  HvInput,
  HvPanel,
  HvTypography,
} from "@hitachivantara/uikit-react-core";
import KnowledgeTable from "components/knowledge/knowledgeTable/KnowledgeTable";
import { Container } from "components/layout";
import AddKnowledgeDialog from "components/knowledge/addKnowledgeModal";
import useStyles from "./styles";

const Knowledge: React.FC = () => {
  const [searchText, setSearchText] = useState<String>("");
  const classes = useStyles();

  const handleSearch = (_evt: any, val: React.SetStateAction<String>) => {
    setSearchText(val);
  };

  const [isAddKnowledgeModalOpen, setAddKnowledgeModal] = useState(false);
  const [value, setValue] = useState([
    ["design", "code"],
    [],
    [1, "subsubcategory2", "subsubcategory8"],
  ]);

  const filters = [
    {
      id: "sourceType",
      name: "Source type",
      data: [
        {
          id: "design",
          name: "Design",
        },
        { id: "code", name: "Code" },
        { id: "implementation", name: "Implementation" },
        { id: "interview", name: "Stakeholder Interview" },
      ],
    },
    {
      id: "fileFormat",
      name: "File format",
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
      id: "project",
      name: "Project",
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
    {
      id: "uploadedBy",
      name: "Uploaded By",
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
            KNOWLEDGE
          </HvTypography>
          <HvButton
            style={{ float: "right" }}
            category="primary"
            onClick={() => setAddKnowledgeModal(true)}
          >
            Add Knowledge
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
            onChange={(
              evt: any,
              values: React.SetStateAction<(string | number)[][]>
            ) => setValue(values)}
          />
        </HvGrid>
        <HvGrid item xs={12}>
          <KnowledgeTable />
        </HvGrid>
      </HvGrid>
      <AddKnowledgeDialog
        isAddKnowledgeModalOpen={isAddKnowledgeModalOpen}
        setAddKnowledgeModal={setAddKnowledgeModal}
      />
    </Container>
  );
};

export default Knowledge;
