import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Collapse,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { menu } from "./menu";

export default function SideBarProject({ setdrawer }) {
  return menu.map((item, key) => (
    <MenuItem key={key} item={item} setdrawer={setdrawer} />
  ));
}

const MenuItem = ({ item, setdrawer }) => {
  const Component = hasChildren(item) ? MultiLevel : SingleLevel;
  return <Component item={item} setdrawer={setdrawer} />;
};

const SingleLevel = ({ item, setdrawer }) => {
  const nav = useNavigate();

  const loc = parseInt(useLocation().pathname.split("/")[3]);
  const currentColor = item.num == loc ? "bg-gray-200" : "";

  return (
    <>
      <ListItem
        button
        style={{ fontSize: 10, padding: 0 }}
        className={currentColor}
        onClick={() => {
          setdrawer(false);
          nav(item.num.toString());
        }}
      >
        <ListItemIcon></ListItemIcon>
        <ListItemText>
          <span className="text-[12px]">{item.title}</span>
        </ListItemText>
      </ListItem>
      <Divider />
    </>
  );
};

const MultiLevel = ({ item, setdrawer }) => {
  const { items: children } = item;
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen((prev) => !prev);
  };
  const getColor = (index) =>
    item.index === 1 ? "bg-[#0171c0]" : item.index === 2 && "bg-[#ffc001]";

  return (
    <React.Fragment>
      <Divider className="bg-black/40" />
      <ListItem
        button
        onClick={handleClick}
        className={getColor(item.index)}
        style={{
          paddingTop: 0,
          paddingBottom: 0,
          color: `${item.index === 1 ? "white" : "inherit"}`,
        }}
      >
        <ListItemText>
          <span
            style={{ color: `${item.index === 1 ? "white" : "inherit"}` }}
            className="text-[14px]"
          >
            {item.title}
          </span>
        </ListItemText>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {children.map((child, key) => (
            <MenuItem key={key} item={child} setdrawer={setdrawer} />
          ))}
        </List>
      </Collapse>
    </React.Fragment>
  );
};

function hasChildren(item) {
  const { items: children } = item;

  if (children === undefined) {
    return false;
  }

  if (children.constructor !== Array) {
    return false;
  }

  if (children.length === 0) {
    return false;
  }

  return true;
}
