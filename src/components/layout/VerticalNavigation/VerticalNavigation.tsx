import React, { useContext } from "react";
import { useMediaQuery, useTheme } from "@material-ui/core";
import { LogOut, User } from "@hv/uikit-react-icons";
import {
  HvVerticalNavigation,
  HvVerticalNavigationTree,
  HvVerticalNavigationActions,
  HvVerticalNavigationAction,
} from "@hv/uikit-react-core";
import NavigationContext from "lib/NavigationContext";
import { data as pages } from "lib/api/pages";
import { getSelection } from "lib/utils/path";

const VerticalNavigation = ({ router, redirect, logout }) => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const { isOpen, toggleOpen } = useContext(NavigationContext);

  const { pathname } = router.location;
  const selection = getSelection(pages, pathname);

  const handleChange = (event, selectedPage) => {
    if (selectedPage.path) redirect(selectedPage.path);
  };

  if (!isOpen || isMdUp) return null;

  return (
    <HvVerticalNavigation
      isCollapsable={false}
      isOpen={isOpen}
      toggleOpenCallback={toggleOpen}
    >
      <HvVerticalNavigationTree
        data={pages}
        selected={selection?.id}
        onClick={handleChange}
      />
      {!isMdUp && (
        <HvVerticalNavigationActions>
          <HvVerticalNavigationAction
            label="Profile"
            icon={<User />}
            onClick={() => {}}
          />
          <HvVerticalNavigationAction
            label="Logout"
            icon={<LogOut />}
            onClick={() => logout()}
          />
        </HvVerticalNavigationActions>
      )}
    </HvVerticalNavigation>
  );
};

export default VerticalNavigation;
