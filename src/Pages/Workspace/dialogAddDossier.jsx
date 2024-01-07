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
import SendRequest from "../../Services/requests";
import { notifier } from "../../redux/notifSlice";
import { addFolder } from "../../redux/folderProjectSlice";
const AddDossier = () => {
  const [title, settitle] = useState("");
  const isLoading = useSelector(
    (state) => state.folder.folders.isLoadingAdding
  );
  const [open, setopen] = useState(false);
  const dis = useDispatch();

  const Submit = (event) => {
    event.preventDefault();

    dis(
      addFolder({
        data: title,
        callback: () => {
          setopen(false);
          settitle("");
        },
      })
    );

    // console.log(roles);
  };

  return (
    <>
      <Button
        startIcon={<FolderTwoTone />}
        variant="outlined"
        color="secondary"
        size="small"
        onClick={() => setopen(true)}
      >
        Nouveau
      </Button>

      <Dialog
        open={open}
        onClose={() => setopen(false)}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>
          <span>Création un nouveau dossier</span>
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

            {isLoading ? (
              <Button variant="text" color="primary">
                <CircularProgress size={20} />
              </Button>
            ) : (
              <Button disableElevation variant="contained" type="submit">
                Créer
              </Button>
            )}
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};
export default AddDossier;
