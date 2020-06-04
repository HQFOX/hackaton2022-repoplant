import React from "react";
import {
  Level1,
  Level2Average,
  Level3Bad,
  Level4,
  Level5
} from "@hv/uikit-react-icons";
import { HvSemanticColorKeys } from "@hv/uikit-react-core";

type Status = {
  Icon: React.ComponentType<any> | null;
  sema: HvSemanticColorKeys;
};

export const getStatus = (statusNumber: number): Status => {
  switch (statusNumber) {
    case 1:
      return { Icon: Level1, sema: "sema10" };
    case 2:
      return { Icon: Level2Average, sema: "sema11" };
    case 3:
      return { Icon: Level3Bad, sema: "sema12" };
    case 4:
      return { Icon: Level4, sema: "sema13" };
    case 5:
      return { Icon: Level5, sema: "sema14" };
    default:
      return { Icon: null, sema: "sema1" };
  }
};
