import { CircularProgress } from "@mui/material";
import React from "react";

const LoadingMini = () => {
  return (
    <div className="w-full flex justify-center p-4">
      <CircularProgress className="text-xl" />
    </div>
  );
};
export const LoadingFull = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <CircularProgress className="text-xl" />
    </div>
  );
};

export default LoadingMini;
