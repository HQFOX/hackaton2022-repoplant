import React from "react";
import { Header, Footer } from "components/layout";

const getStyles = (hasFooter: boolean) => ({
  content: {
    padding: `${hasFooter ? 0 : "30px 15px"}`
  }
});

const withLayout = <P extends {}>(
  Component: React.ComponentType<P>,
  hasFooter = false
): React.FC<P> => props => {
  const { content } = getStyles(hasFooter);

  return (
    <>
      <Header />
      <section id="content" style={{ ...content }}>
        <Component {...(props as P)} />
      </section>
      {hasFooter && <Footer />}
    </>
  );
};

export default withLayout;
