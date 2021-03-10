import React from "react";
import { useHistory } from "react-router-dom";

import { HvGlobalActions } from "@hv/uikit-react-core";

const Footer = ({ name, children }) => {
  const { goBack } = useHistory();

  return (
    <HvGlobalActions title={name} backButtonAction={goBack}>
      {children}
    </HvGlobalActions>
  );
};

export default Footer;
