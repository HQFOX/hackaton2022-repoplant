import React, { lazy } from "react";
import { Level5 } from "@hitachivantara/uikit-react-icons";
import { Semantic } from "@hitachivantara/uikit-react-lab";

export const getStatus = (status: any) => {
  const Level = `Level${status}`;
  const statusObj: {
    Icon: React.ReactNode;
    sema: Semantic;
  } = { Icon: <Level5 />, sema: "sema5" };
  return statusObj;
};
