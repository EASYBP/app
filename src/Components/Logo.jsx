import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const nav = useNavigate();
  return (
    <Button
      variant="text"
      color="primary"
      className="text-xl flex  text-amber-600 font-extrabold"
      onClick={() => nav("/")}
    >
      Easy<span className="text-purple-600">BPTool</span>{" "}
    </Button>
  );
};

export default Logo;
