import React, { useMemo, useState } from "react";
import { HvProvider } from "@hitachivantara/uikit-react-core";
import { DataContextValue } from "types/data";
import { Project } from "types/project";

export const DataContext = React.createContext<DataContextValue>({
  projects: [] as Project[],
  features: "teste",
  knowledge: "teste",
});

export const DataProvider: React.FC = ({ children }) => {
  const [projects, setProjects] = useState([] as Project[]);
  const [features, setFeatures] = useState("");
  const [knowledge, setKnowledge] = useState("");

  const value = useMemo(
    // addProject = (project: Project) => setProjects([...projects, project]);

    () => ({
      projects,
      // addProject(),
      features,
      knowledge,
    }),
    [projects, features, knowledge]
  );
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
