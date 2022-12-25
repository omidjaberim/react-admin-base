import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SvgIcon,
  SvgIconTypeMap,
  Toolbar,
} from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { t } from "i18next";
import { MdExitToApp } from "react-icons/md";
interface IProp {
  drawerWidth: number;
  items: {
    Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
    txt: string;
  }[];
}

const SideMenu = (props: IProp) => {
  const { items, drawerWidth } = props;
  return (
    <Drawer
      variant="permanent"
      className={"z-0 shrink-0 box-border"}
      sx={{
        with: drawerWidth,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
        display: { xs: "none", lg: "flex" },
      }}
    >
      <Toolbar />
      <Box className="flex flex-col justify-between h-full bg-white">
        <List>
          {items.map((item) => (
            <ListItem key={item.txt} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: "initial",
                  px: 2.5,
                }}
                className="hover:bg-hoverBg hover:ps-8 hover:border-s-8 hover:text-white border-x-primary transition-all ease-in-out delay-100 border-b border-solid border-borderColor"
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    me: 3,
                    justifyContent: "center",
                  }}
                  className="me-3"
                >
                  <SvgIcon
                    component={item.Icon}
                    inheritViewBox
                    className="text-iconColor"
                  />
                </ListItemIcon>
                <ListItemText primary={item.txt} className="text-txtDark" />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <List>
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
        </List>
      </Box>
    </Drawer>
  );
};
export default SideMenu;
