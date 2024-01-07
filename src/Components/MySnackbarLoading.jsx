import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import Slide from "@mui/material/Slide";
import { useSelector, useDispatch } from "react-redux";
import { Alert, CircularProgress } from "@mui/material";
import { exitNotif } from "../redux/notifSlice";

function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}

export default function MySnackbarLaoding() {
  const { loading } = useSelector((state) => state);
  const dispatch = useDispatch();
  const Close = () => {
    dispatch(exitNotif());
  };
  return (
    <Snackbar open={loading.isLoading} TransitionComponent={SlideTransition}>
      <Alert icon={false} variant="standard" severity="info">
        <div className="flex flex-row gap-3 items-center">
          <CircularProgress fontSize="inherit" size={20} />
          {loading.message}
        </div>
      </Alert>
    </Snackbar>
  );
}
