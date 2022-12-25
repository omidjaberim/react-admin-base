import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import {
  MdMenuOpen,
  MdMenu,
  MdOutlineAccountCircle,
  MdOutlineEmail,
  MdOutlineNotificationsActive,
  MdMoreVert,
} from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./menu";
import { useTranslation } from "react-i18next";
import { Tooltip } from "@mui/material";
import { t } from "i18next";

type Anchor = "left" | "right";

interface IProp {
  menuState: {
    left: boolean;
    right: boolean;
  };
  toggleDrawer: (
    anchor: Anchor,
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
  anchor: Anchor;
}

const CustomNavbar = (props: IProp) => {
  const { menuState, toggleDrawer, anchor } = props;

  const { i18n } = useTranslation();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const changeDir = () => {
    const changhedLng = i18n.language === "fa-IR" ? "en-US" : "fa-IR";
    i18n.changeLanguage(changhedLng);
  };
  return (
    <Box className="flex w-full z-50">
      <AppBar position="static" className="bg-primary">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            sx={{ mr: 2, display: { xs: "flex", lg: "none" } }}
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
          >
            {menuState[anchor] ? <MdMenuOpen /> : <MdMenu />}
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Dashboard Name
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Tooltip title={t("changeLng")}>
            <IconButton
              onClick={changeDir}
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <BiWorld />
            </IconButton>
          </Tooltip>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <MdOutlineEmail />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <MdOutlineNotificationsActive />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls="desktop-menu"
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <MdOutlineAccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MdMoreVert />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <MobileMenu
        handleMobileMenuClose={handleMobileMenuClose}
        handleProfileMenuOpen={handleProfileMenuOpen}
        isMobileMenuOpen={isMobileMenuOpen}
        mobileMoreAnchorEl={mobileMoreAnchorEl}
      />
      <DesktopMenu
        anchorEl={anchorEl}
        handleMenuClose={handleMenuClose}
        isMenuOpen={isMenuOpen}
      />
    </Box>
  );
};
export default CustomNavbar;
