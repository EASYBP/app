/* eslint-disable react-hooks/exhaustive-deps */

import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";

import Typography from "@mui/material/Typography";

import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import SendRequest from "../../../Services/requests";
import { notifier } from "../../../redux/notifSlice";
import SideBarProject from "./sideBar";

import { IconButton, Button } from "@mui/material";
import {
  Menu,
  NavigateBefore,
  NavigateNextOutlined,
} from "@mui/icons-material";
import { initProject } from "../../../redux/projectSlice";
import { LoadingFull } from "../../../Components/LoadingMini";

export default function Project() {
  const [drawer, setdrawer] = React.useState(false);
  const params = useParams();
  const [project, setproject] = React.useState();
  const dis = useDispatch();

  React.useEffect(() => {
    SendRequest({
      endpoint: "/project/get/one/full",
      method: "get",
      body: { id: params.id },
      success: (res) => {
        setproject(res.data);

        dis(initProject(res.data));
      },
      failed: (err) => {
        console.log(err);
        dis(
          notifier({ message: "Erreur rencontré, réessayez", type: "error" })
        );
      },
    });
  }, []);
  return (
    <div>
      {!project ? (
        <LoadingFull />
      ) : (
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar position="fixed">
            <Toolbar className="flex justify-between flex-row items-center">
              <div className="flex items-center">
                <IconButton
                  onClick={() => setdrawer(true)}
                  color="inherit"
                  title="Menu"
                  className="mr-4"
                >
                  <Menu />
                </IconButton>

                <Typography variant="h6" noWrap component="div">
                  {project.title}
                </Typography>
              </div>

              <span className="text-white/70 text-sm">v0.4.5--alpha</span>
            </Toolbar>
          </AppBar>

          <Drawer open={drawer} onClose={() => setdrawer(false)}>
            <Toolbar className="flex justify-center items-center ">
              <h2 className="text-lg font-semibold">Choisir un tableau</h2>
            </Toolbar>
            <Box sx={{ width: "400px" }}>
              <SideBarProject setdrawer={setdrawer} />
            </Box>
          </Drawer>
          <Box component="main" sx={{ flexGrow: 1, p: "10px 0px" }}>
            <Toolbar />
            <Outlet />
          </Box>
        </Box>
      )}
    </div>
  );
}
