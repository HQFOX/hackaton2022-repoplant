import React, { useContext, useEffect, SyntheticEvent } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { useMediaQuery, useTheme } from "@material-ui/core";
import HvHeader, {
  HvHeaderBrand,
  HvHeaderActions,
  HvHeaderNavigation
} from "@hv/uikit-react-core/dist/Header";
import { HvButton } from "@hv/uikit-react-core";
import { LogOut, Menu, ThemeSwitcher, User } from "@hv/uikit-react-icons";
import HitachiLogo from "assets/HitachiLogo";
import { getSelection } from "lib/utils/path";
import ThemeContext from "lib/ThemeContext";
import NavigationContext from "lib/NavigationContext";
import { Page } from "typings/pages";
import { HeaderProps } from "./index";

const Header: React.FC<HeaderProps> = ({
  router,
  auth,
  pages,
  getPages,
  logout
}: HeaderProps) => {
  const { t } = useTranslation();
  const history = useHistory();
  const theme = useTheme();
  const { isAuthed } = auth;
  const { pathname } = router.location;

  const { toggleTheme } = useContext(ThemeContext);
  const { toggleOpen } = useContext(NavigationContext);

  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const isXs = useMediaQuery(theme.breakpoints.only("xs"));

  const selection = getSelection(pages.data, pathname);

  useEffect(() => {
    getPages();
  }, [getPages]);

  const handleChange = (event: SyntheticEvent, selectedPage: Page): void => {
    if (selectedPage.path) history.push(selectedPage.path);
  };

  return pages?.data ? (
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
          selected={selection?.id}
          onClick={handleChange}
        />
      )}

      <HvHeaderActions>
        <HvButton
          category="icon"
          aria-label="Change theme"
          onClick={() => toggleTheme()}>
          <ThemeSwitcher />
        </HvButton>
        {isAuthed && (
          <HvButton category="icon" aria-label="Open User panel">
            <User />
          </HvButton>
        )}
        {isAuthed && isMdUp && (
          <HvButton
            category="icon"
            onClick={() => logout()}
            aria-label="Logout">
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
