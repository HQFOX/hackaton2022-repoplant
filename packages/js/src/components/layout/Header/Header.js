import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import HvHeader, {
  HvHeaderBrand,
  HvHeaderActions,
  HvHeaderNavigation
} from "@hv/uikit-react-core/dist/Header";
import HvButton from "@hv/uikit-react-core/dist/Button";
import { LogOut, User } from "@hv/uikit-react-icons/dist";
import HitachiLogo from "assets/HitachiLogo";
import { getSelection } from "lib/utils/path";

const Header = ({ router, auth, pages, getPages, logout }) => {
  const { t } = useTranslation();
  const history = useHistory();
  const { isAuthed } = auth;
  const { pathname } = router.location;

  const selection = getSelection(pages.data, pathname);

  useEffect(() => {
    getPages();
  }, [getPages]);

  const handleChange = (event, selectedPage) => {
    if (selectedPage.path) history.push(selectedPage.path);
  };

  return pages.data ? (
    <HvHeader position="relative">
      <HvHeaderBrand
        logo={<HitachiLogo />}
        name={t("components.layout.header.appName")}
      />
      {isAuthed && (
        <HvHeaderNavigation
          data={pages.data}
          selected={selection && selection.id}
          onClick={handleChange}
        />
      )}
      {isAuthed && (
        <HvHeaderActions>
          <HvButton category="icon" aria-label="Open User panel">
            <User />
          </HvButton>
          <HvButton
            category="icon"
            aria-label="Logout"
            onClick={() => logout()}>
            <LogOut />
          </HvButton>
        </HvHeaderActions>
      )}
    </HvHeader>
  ) : (
    <></>
  );
};

export default Header;
