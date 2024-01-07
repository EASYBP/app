import { Divider, Drawer, Toolbar } from "@mui/material";
import React from "react";
import Logo from "../../Components/Logo";

const drawerWidth = 240;
const SideBar = () => {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar className="flex flex-col items-center justify-center">
        <Logo />
      </Toolbar>
      <Divider />
    </Drawer>
  );
};

export default SideBar;
