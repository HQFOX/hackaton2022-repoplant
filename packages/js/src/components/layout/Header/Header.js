import React, { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { useMediaQuery, useTheme } from "@material-ui/core";
import HvHeader, {
  HvHeaderBrand,
  HvHeaderActions,
  HvHeaderNavigation
} from "@hv/uikit-react-core/dist/Header";
import { HvButton } from "@hv/uikit-react-core/dist";
import { LogOut, Menu, ThemeSwitcher, User } from "@hv/uikit-react-icons/dist";
import HitachiLogo from "assets/HitachiLogo";
import ThemeContext from "lib/ThemeContext";
import NavigationContext from "lib/NavigationContext";
import { getSelection } from "lib/utils/path";

const Header = ({ router, auth, pages, getPages, logout }) => {
  const { t } = useTranslation();
  const history = useHistory();
  const theme = useTheme();
  const { toggleOpen } = useContext(NavigationContext);
  const { toggleTheme } = useContext(ThemeContext);

  const { isAuthed } = auth;
  const { pathname } = router.location;

  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const isXs = useMediaQuery(theme.breakpoints.only("xs"));

  const selection = getSelection(pages.data, pathname);

  useEffect(() => {
    getPages();
  }, [getPages]);

  const handleChange = (event, selectedPage) => {
    if (selectedPage.path) history.push(selectedPage.path);
  };

  return pages.data ? (
    <HvHeader>
      {!isMdUp && (
        <HvButton category="icon" onClick={toggleOpen}>
          <Menu />
        </HvButton>
      )}

      <HvHeaderBrand
        logo={<HitachiLogo />}
        name={!isXs ? t("components.layout.header.appName") : undefined}
      />

      {isAuthed && isMdUp && (
        <HvHeaderNavigation
          data={pages.data}
          selected={selection && selection.id}
          onClick={handleChange}
        />
      )}

      <HvHeaderActions>
        <HvButton category="icon" aria-label="Change theme">
          <ThemeSwitcher onClick={() => toggleTheme()} />
        </HvButton>
        {isAuthed && (
          <HvButton category="icon" aria-label="Open User panel">
            <User />
          </HvButton>
        )}
        {isAuthed && isMdUp && (
          <HvButton
            category="icon"
            aria-label="Logout"
            onClick={() => logout()}>
            <LogOut />
          </HvButton>
        )}
      </HvHeaderActions>
    </HvHeader>
  ) : (
    <></>
  );
};

export default Header;
