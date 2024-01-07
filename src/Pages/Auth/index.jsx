import animationLogin from "../../public/animations/login.json";

import { Outlet } from "react-router-dom";
import MyLottie from "../../Components/MyLottie";
import { Divider } from "@mui/material";
// import { SERVER_URL } from "../Data/serveur";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const Auth = () => {
  return (
    <div className="h-screen w-screen flex">
      <div className="w-1/2 flex flex-col items-center">
        <div className="h-full flex flex-col p-4 max-w-md">
          <div className="flex items-center h-16 "></div>
          <Outlet />

          <div className="grow"></div>
        </div>
      </div>
      <Rightside />
    </div>
  );
};

export default Auth;

const Rightside = () => {
  return (
    <div className="h-full w-1/2 border-l-2 flex justify-center items-center ">
      <MyLottie animation={animationLogin} />
    </div>
  );
};
