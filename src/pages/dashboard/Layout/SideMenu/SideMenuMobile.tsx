import {
  Box,
  Divider,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SvgIcon,
  SvgIconTypeMap,
  SwipeableDrawer,
  Toolbar,
} from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { useAppSelector } from "redux/hooks";
import React from "react";
import { MdExitToApp } from "react-icons/md";
import { MdOutlineChevronRight, MdOutlineChevronLeft } from "react-icons/md";
import { t } from "i18next";

type Anchor = "left" | "right";
interface IProp {
  items: {
    Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
    txt: string;
  }[];
  drawerWidth: number;
  anchor: Anchor;
  menuState: {
    left: boolean;
    right: boolean;
  };
  toggleDrawer: (
    anchor: Anchor,
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

const SideMenuMobile = (props: IProp) => {
  const { items, drawerWidth, anchor, menuState, toggleDrawer } = props;
  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: drawerWidth }}
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      role="presentation"
      dir={anchor}
      className="bg-white h-full"
    >
      <Grid className="flex justify-between w-full items-center">
        <div>LOGO</div> {/* //// LOGO goes here */}
        <IconButton onClick={toggleDrawer(anchor, false)}>
          {anchor === "right" ? (
            <MdOutlineChevronRight />
          ) : (
            <MdOutlineChevronLeft />
          )}
        </IconButton>
      </Grid>
      <Divider />
      <Box className="flex flex-col justify-between h-full">
        <List>
          {items.map((item) => (
            <ListItem key={item.txt} disablePadding className="hover:bg-hoverBg border-b border-solid border-borderColor">
              <ListItemButton
                sx={{
                  minHeight: 48,
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    justifyContent: "center",
                  }}
                  className="text-iconColor me-3"
                >
                  <SvgIcon component={item.Icon} inheritViewBox />
                </ListItemIcon>
                <ListItemText primary={item.txt} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        {/* <List>
          <ListItem>
            <ListItemIcon
              sx={{
                minWidth: 0,
                mx: 3,
                justifyContent: "center",
              }}
            >
              <MdExitToApp />
            </ListItemIcon>
            <ListItemText primary={t("Exit")} />
          </ListItem>
        </List> */}
      </Box>
    </Box>
  );
  return (
    <SwipeableDrawer
      anchor={anchor}
      open={menuState[anchor]}
      onClose={toggleDrawer(anchor, false)}
      onOpen={toggleDrawer(anchor, true)}
      sx={{
        "& .MuiPaper-root": { direction: "ltr", width: drawerWidth, overflow: 'hidden' },
        "& div.muirtl-1160xiw-MuiPaper-root-MuiDrawer-paper": {
          right: window.innerWidth - drawerWidth,
        },
      }}
      className="overflow-hidden"
    >
      {list(anchor)}
    </SwipeableDrawer>
  );
};
export default SideMenuMobile;
