import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useMediaQuery, useTheme } from "@material-ui/core";
import { LogOut, User } from "@hv/uikit-react-icons/dist";
import HvVerticalNavigation, {
  Action,
  Actions,
  Navigation
} from "@hv/uikit-react-core/dist/VerticalNavigation";
import NavigationContext from "lib/NavigationContext";
import { getSelection } from "lib/utils/path";

const VerticalNavigation = ({ router, pages, getPages, logout }) => {
  const history = useHistory();
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const { isOpen, toggleOpen } = useContext(NavigationContext);

  const { pathname } = router.location;
  const selection = getSelection(pages.data, pathname);

  const handleChange = (event, selectedPage) => {
    if (selectedPage.path) history.push(selectedPage.path);
  };

  useEffect(() => {
    getPages();
  }, [getPages]);

  if (!isOpen || isMdUp) return null;

  return (
    <HvVerticalNavigation
      isCollapsable={false}
      isOpen={isOpen}
      toggleOpenCallback={toggleOpen}>
      <Navigation
        data={pages.data}
        selected={selection?.id}
        onClick={handleChange}
      />
      {!isMdUp && (
        <Actions>
          <Action label="Profile" icon={<User />} onClick={() => {}} />
          <Action label="Logout" icon={<LogOut />} onClick={() => logout()} />
        </Actions>
      )}
    </HvVerticalNavigation>
  );
};

export default VerticalNavigation;
