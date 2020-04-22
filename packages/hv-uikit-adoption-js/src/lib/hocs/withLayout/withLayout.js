import React from "react";
import Header from "components/layout/Header";
import Footer from "components/layout/Footer";

const getStyles = hasFooter => ({
  content: {
    padding: `${hasFooter ? 0 : "30px 15px"}` // grid padding
  }
});

const withLayout = (Component, hasFooter = false) => props => {
  const { content } = getStyles(hasFooter);

  return (
    <>
      <Header />
      <section id="content" style={{ ...content }}>
        <Component {...props} />
      </section>
      {hasFooter && <Footer />}
    </>
  );
};

export default withLayout;
