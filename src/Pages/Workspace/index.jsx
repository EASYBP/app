/* eslint-disable react-hooks/exhaustive-deps */
import { LogoutTwoTone } from "@mui/icons-material";
import { Box, IconButton, Toolbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { deconnexion } from "../../redux/userSlice";

import { useEffect, useState } from "react";
import SendRequest from "../../Services/requests";
import { notifier } from "../../redux/notifSlice";
import AddDossier from "./dialogAddDossier";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import SideBar from "./sideBar";
import FolderItem from "./folderItem";
import AddProject from "./dialogAddProject";
import ProjectItem from "./projectItem";
import LoadingMini from "../../Components/LoadingMini";
import { getFolders, getProjects } from "../../redux/folderProjectSlice";

const drawerWidth = 240;
const Workspace = () => {
  const dis = useDispatch();
  const { name } = useSelector((state) => state.user);
  const { folders, projects } = useSelector((state) => state.folder);

  useEffect(() => {
    dis(getProjects());
    dis(getFolders());
  }, [dis]);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
        }}
      >
        <Toolbar className="flex justify-between items-center">
          <Typography variant="h6" noWrap component="div">
            {name}
          </Typography>

          <IconButton
            title="Déconnexion"
            aria-label="déconnexion"
            color="inherit"
            onClick={() => dis(deconnexion())}
          >
            <LogoutTwoTone />
          </IconButton>
        </Toolbar>
      </AppBar>
      <SideBar />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        <div className="p-4 rounded-md filter ">
          <div className="flex justify-between items-center py-2">
            <span className="text-2xl">Dossiers</span>
            <AddDossier />
          </div>
          <Divider />
          {folders.isLoading ? (
            <LoadingMini />
          ) : folders.data.length === 0 ? (
            <p className="opacity-60 p-3">Aucun dossier</p>
          ) : (
            <div className="flex flex-wrap gap-4 py-5">
              {folders.data.map((f, i) => (
                <FolderItem folder={f} index={i} />
              ))}
            </div>
          )}
        </div>
        <br />
        <div className="p-4 rounded-md filter ">
          <div className="flex justify-between items-center py-2">
            <span className="text-2xl">Projets récents</span>
            <AddProject folders={folders.data} />
          </div>
          <Divider />
          {projects.isLoading ? (
            <LoadingMini />
          ) : projects.data.length === 0 ? (
            <p className="opacity-60 p-3">Aucun project</p>
          ) : (
            <div className="flex flex-wrap gap-4 py-5">
              {projects.data.map((p, i) => (
                <ProjectItem folder={p} index={i} />
              ))}
            </div>
          )}
        </div>
      </Box>
    </Box>
  );
};

export default Workspace;
