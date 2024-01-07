import { DeleteForever, Folder, OpenInNew } from "@mui/icons-material";
import { IconButton, Paper } from "@mui/material";
import React from "react";
import { getDate } from "../../functions/date";

const FolderItem = ({ folder }) => {
  return (
    <Paper
      elevation={0}
      key={folder._id}
      className=" w-full md:w-[30%] h-[100px] p-3 border-2 flex flex-row transition-colors duration-300 group"
    >
      <div className="flex-grow flex flex-col justify-between">
        <div className="flex flex-row gap-2 items-center">
          <Folder className="text-blue-500" />
          <span className="text-lg font-semibold"> {folder.title}</span>
        </div>
        <div className="flex-grow" />
        <span className="text-[12px] opacity-30">{getDate(folder.date)}</span>
      </div>
      <div className="flex-col gap-1 hidden group-hover:flex transition-all">
        <IconButton title="Ouvrir" aria-label="ouvrir" onClick={() => {}}>
          <OpenInNew fontSize="40" />
        </IconButton>
        <IconButton title="Supprimer" aria-label="ouvrir" onClick={() => {}}>
          <DeleteForever fontSize="40" className="text-red-500" />
        </IconButton>
      </div>
    </Paper>
  );
};

export default FolderItem;
