import React, { useContext, MouseEvent } from "react";
import { useHistory } from "react-router-dom";
import { useMediaQuery, useTheme } from "@material-ui/core";
import {
  LogOut,
  Menu,
  ThemeSwitcher,
  Alert,
} from "@hitachivantara/uikit-react-icons";
import {
  HvHeader,
  HvHeaderBrand,
  HvHeaderActions,
  HvHeaderNavigation,
  NavigationItemProp,
  HvButton,
  HvAvatar,
} from "@hitachivantara/uikit-react-core";

import LumadaLogo from "assets/LumadaLogo";
import { AuthContext } from "lib/context/AuthContext";
import { ThemeContext } from "lib/context/ThemeContext";
import { NavigationContext } from "lib/context/NavigationContext";
import navigation from "lib/navigation";

const { REACT_APP_NAME } = process.env;

const Header: React.FC = () => {
  const history = useHistory();
  const theme = useTheme();

  const { isAuthed, logout } = useContext(AuthContext);
  const { toggleTheme } = useContext(ThemeContext);
  const { toggleVerticalOpen, activePath } = useContext(NavigationContext);

  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const isXs = useMediaQuery(theme.breakpoints.only("xs"));

  const handleChange = (
    event: MouseEvent,
    selection: NavigationItemProp
  ): void => {
    if (selection.path) history.push(selection.path);
  };

  return (
    <HvHeader>
      {isAuthed && !isMdUp && (
        <div>
          <HvButton category="ghost" icon onClick={toggleVerticalOpen}>
            <Menu />
          </HvButton>
        </div>
      )}

      <HvHeaderBrand
        logo={<LumadaLogo style={{ width: 72, height: 20 }} />}
        name={!isXs ? REACT_APP_NAME : undefined}
      />

      {isAuthed && isMdUp && (
        <HvHeaderNavigation
          data={navigation}
          selected={activePath?.id}
          onClick={handleChange}
        />
      )}

      {isAuthed && isMdUp && (
        <HvHeaderActions>
          <HvButton icon>
            <Alert />
          </HvButton>
          <HvAvatar
            backgroundColor="acce1"
            size="XS"
            variant="circular"
            containerProps={{}}
          >
            CM
          </HvAvatar>
        </HvHeaderActions>
      )}
    </HvHeader>
  );
};

export default Header;
