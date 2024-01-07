import { FolderTwoTone } from "@mui/icons-material";
import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ConfigTableDialog = ({open, setopen,formule}) => {
  const [title, settitle] = useState("");


  const dis = useDispatch();

  const Submit = (event) => {
    event.preventDefault();


    // console.log(roles);
  };

  return (
    <>

 
      <Dialog
        open={open}
        onClose={() => setopen(false)}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>
          <span>Configuration</span>
        </DialogTitle>
        <form onSubmit={Submit}>
          <DialogContent dividers>
            <TextField
              label="Nom du dossier"
              variant="filled"
              fullWidth
              required
              value={title}
              onChange={(v) => settitle(v.target.value)}
            />
          </DialogContent>

          <DialogActions>
            <Button onClick={() => setopen(false)}>Annuler</Button>

        
              <Button disableElevation variant="contained" type="submit">
                Créer
              </Button>
       
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};
export default ConfigTableDialog;
