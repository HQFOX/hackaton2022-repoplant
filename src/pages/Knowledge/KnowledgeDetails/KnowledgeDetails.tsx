import React, { useState } from "react";
import clsx from "clsx";
import {
  HvButton,
  HvDropDownMenu,
  HvGlobalActions,
  HvGrid,
  HvTab,
  HvTabs,
  HvTypography,
} from "@hitachivantara/uikit-react-core";
import { Container } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { Backwards } from "@hitachivantara/uikit-react-icons";
import useStyles from "./styles";

const KnowlwdgeDetails: React.FC = () => {
  const { goBack } = useHistory();
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const handleChange = (e: any, newValue: React.SetStateAction<number>) =>
    setValue(newValue);

  return (
    <Container>
      <HvGlobalActions
        className={clsx(classes.globalActions, {
          //  [classes.hasSecondLevel]: hasSecondLevel,
        })}
        position="fixed"
        title="HKS"
        backButton={
          <HvButton aria-label="Back" icon onClick={goBack}>
            <Backwards />
          </HvButton>
        }
      >
        <HvDropDownMenu
          // id={`dropdownItem`}
          aria-label="dropdownMenu-Items"
          placement="left"
          dataList={[
            { label: "Action 2" },
            { label: "Action 3" },
            { label: "Action 4" },
          ]}
        />
      </HvGlobalActions>
      <HvGrid container className={classes.root}>
        <HvGrid item xs={12}>
          <HvTabs id="tabs-main" value={value} onChange={handleChange}>
            <HvTab id="tabs-tab1" label="Overview" />
            <HvTab id="tabs-tab2" label="File" />
          </HvTabs>
          <HvGlobalActions
            title="Description"
            variant="section"
            style={{ marginTop: 40 }}
          />
          <HvTypography variant="normalText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus
            faucibus ornare suspendisse sed nisi lacus sed. Tortor at risus
            viverra adipiscing at in tellus. Et netus et malesuada fames ac
            turpis. Sed blandit libero volutpat sed cras ornare arcu. Arcu odio
            ut sem nulla pharetra diam sit amet. Sagittis purus sit amet
            volutpat consequat mauris nunc congue. Sed vulputate mi sit amet
            mauris commodo quis imperdiet massa. Dictum varius duis at
            consectetur. Lorem sed risus ultricies tristique nulla aliquet enim
            tortor at. Turpis egestas maecenas pharetra convallis posuere morbi.
            Eget sit amet tellus cras adipiscing. Egestas erat imperdiet sed
            euismod nisi. Morbi tincidunt augue interdum velit euismod in
            pellentesque massa. At augue eget arcu dictum varius duis at. Tellus
            elementum sagittis vitae et. In est ante in nibh mauris cursus
            mattis. Faucibus nisl tincidunt eget nullam non. Cursus metus
            aliquam eleifend mi in nulla posuere.
          </HvTypography>
        </HvGrid>
      </HvGrid>
    </Container>
  );
};

export default KnowlwdgeDetails;
