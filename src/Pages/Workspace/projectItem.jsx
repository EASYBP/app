import { ArticleOutlined, DeleteForever } from "@mui/icons-material";
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  IconButton,
  ListItem,
  Paper,
} from "@mui/material";
import React from "react";
import { getDate } from "../../functions/date";

import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import SendRequest from "../../Services/requests";
import { useDispatch } from "react-redux";
import { notifier } from "../../redux/notifSlice";
import { useNavigate } from "react-router-dom";
const ProjectItem = ({ folder, index, setprojects }) => {
  const dis = useDispatch();
  const nav = useNavigate();
  const DeleteProject = () => {
    SendRequest({
      endpoint: "/project/delete",
      method: "delete",
      body: { id: folder._id },
      success: (res) => {
        setprojects((old) => [...old.filter((o) => o._id !== folder._id)]);
        dis(notifier({ message: "Un projet a été supprimé" }));
      },
      failed: (err) =>
        dis(notifier({ message: "Erreur de suppression", type: "error" })),
    });
  };
  const toProject = () => {
    nav("/project/" + folder._id);
  };
  return (
    <Paper
      elevation={1}
      key={index}
      className="w-full h-[50px] p-5  flex flex-row items-center  duration-300 group transition-all"
    >
      <ListItemIcon>
        <ArticleOutlined className="text-green-500" />
      </ListItemIcon>

      <ListItemText className="text-lg font-semibold">
        {folder.title}
      </ListItemText>

      <div className="flex-grow" />
      <span className="text-[12px] opacity-30 group-hover:hidden">
        {getDate(folder.date)}
      </span>
      <Box
        color={"inherit"}
        className="flex-row gap-2 w-20 hidden group-hover:flex transition-all h-auto translate-x-[100%] group-hover:translate-x-0 "
      >
        <IconButton title="Ouvrir" aria-label="ouvrir" onClick={toProject}>
          <OpenInNewIcon fontSize="40" />
        </IconButton>
        <IconButton
          title="Supprimer"
          aria-label="ouvrir"
          onClick={DeleteProject}
        >
          <DeleteForever fontSize="40" className="text-red-500" />
        </IconButton>
      </Box>
    </Paper>
  );
};

export default ProjectItem;
