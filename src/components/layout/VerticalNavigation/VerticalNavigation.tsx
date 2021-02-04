import React, { useContext } from "react";
import { useMediaQuery, useTheme } from "@material-ui/core";
import { LogOut, User } from "@hv/uikit-react-icons";
import {
  HvVerticalNavigation,
  HvVerticalNavigationTree,
  HvVerticalNavigationActions,
  HvVerticalNavigationAction,
} from "@hv/uikit-react-core";
import history from "lib/utils/history";
import { NavigationContext } from "lib/context/NavigationContext";
import { AuthContext } from "lib/context/AuthContext";
import { pages } from "lib/api/pages";

const VerticalNavigation = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const { isOpen, toggleOpen, activePage } = useContext(NavigationContext);
  const { logout } = useContext(AuthContext);

  const handleChange = (event, selection) => {
    if (selection.path) history.push(selection.path);
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
        selected={activePage?.id}
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
