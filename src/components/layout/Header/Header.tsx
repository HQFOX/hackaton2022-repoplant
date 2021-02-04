import React, { useContext, MouseEvent } from "react";
import { useTranslation } from "react-i18next";
import { useMediaQuery, useTheme } from "@material-ui/core";
import {
  HvHeader,
  HvHeaderBrand,
  HvHeaderActions,
  HvHeaderNavigation,
  NavigationItemProp,
  HvButton,
} from "@hv/uikit-react-core";
import { LogOut, Menu, ThemeSwitcher, User } from "@hv/uikit-react-icons";
import HitachiLogo from "assets/HitachiLogo";
import { ThemeContext } from "lib/context/ThemeContext";
import { AuthContext } from "lib/context/AuthContext";
import { NavigationContext } from "lib/context/NavigationContext";
import { pages } from "lib/api/pages";
import history from "lib/utils/history";
import { HeaderProps } from "./index";

const Header: React.FC<HeaderProps> = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const { toggleTheme } = useContext(ThemeContext);
  const { toggleOpen, activePage } = useContext(NavigationContext);
  const { isAuthed, logout } = useContext(AuthContext);
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const isXs = useMediaQuery(theme.breakpoints.only("xs"));

  const handleChange = (
    event: MouseEvent,
    selection: NavigationItemProp
  ): void => {
    if (selection.path) history.push(selection.path);
  };

  return pages ? (
    <HvHeader>
      {!isMdUp && (
        <div>
          <HvButton category="ghost" icon onClick={toggleOpen}>
            <Menu />
          </HvButton>
        </div>
      )}

      <HvHeaderBrand
        logo={<HitachiLogo />}
        name={!isXs ? t("components.layout.header.appName") : undefined}
      />

      {isAuthed && isMdUp && (
        <HvHeaderNavigation
          data={pages}
          selected={activePage?.id}
          onClick={handleChange}
        />
      )}

      <HvHeaderActions>
        <HvButton icon aria-label="Change theme" onClick={() => toggleTheme()}>
          <ThemeSwitcher />
        </HvButton>
        {isAuthed && (
          <HvButton icon aria-label="Open User panel">
            <User />
          </HvButton>
        )}
        {isAuthed && isMdUp && (
          <HvButton icon onClick={() => logout()} aria-label="Logout">
            <LogOut />
          </HvButton>
        )}
      </HvHeaderActions>
    </HvHeader>
  ) : null;
};

export default Header;
