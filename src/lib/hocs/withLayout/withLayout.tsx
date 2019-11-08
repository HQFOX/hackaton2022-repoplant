/**
 * Copyright (c) 2019 Hitachi Vantara Corporation.
 *
 *  The copyright to the computer software herein is the property of
 *  Hitachi Vantara Corporation. The software may be used and/or copied only
 *  with the written permission of Hitachi Vantara Corporation or in accordance
 *  with the terms and conditions stipulated in the agreement/contract
 *  under which the software has been supplied.
 */

import React from "react";
import { Header, Footer } from "components/common";

const getStyles = (hasFooter: boolean) => ({
  root: {
    paddingTop: "50px",
    zIndex: -1,
  },
  content: {
    minHeight: `calc(100vh - ${hasFooter ? 90 : 50}px)`,
    padding: "30px 15px",
  },
});

const withLayout = <P extends {}>(
  Component: React.ComponentType<P>,
  hasFooter = false
): React.FC<P> => props => {
  const { root, content } = getStyles(hasFooter);

  return (
    <div style={{ ...root }}>
      <Header />
      <div style={{ ...content }}>
        <Component {...(props as P)} />
      </div>
      {hasFooter && <Footer />}
    </div>
  );
};

export default withLayout;
