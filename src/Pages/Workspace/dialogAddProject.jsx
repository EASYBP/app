import { Add } from "@mui/icons-material";
import {
  Autocomplete,
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
import { addProject } from "../../redux/folderProjectSlice";
const AddProject = ({ setfolders, folders, setprojects }) => {
  const [title, settitle] = useState("");
  const [folderTitle, setfolderTitle] = useState("");
  const [open, setopen] = useState(false);
  const isLoading = useSelector(
    (state) => state.folder.projects.isLoadingAdding
  );
  const dis = useDispatch();
  const t6 = useSelector((state) => state.project.t6).map((t) =>
    Object.assign({ value: 0 }, t)
  );
  const Submit = (event) => {
    event.preventDefault();
    dis(
      addProject({
        data: { title, folderTitle, bp: t6 },
        callback: () => {
          settitle("");
          setopen(false);
        },
      })
    );
  };

  return (
    <>
      <Button
        startIcon={<Add />}
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
          <span>Création un nouveau projet</span>
        </DialogTitle>
        <form onSubmit={Submit}>
          <DialogContent dividers>
            <TextField
              label="Nom du projet"
              variant="filled"
              fullWidth
              required
              value={title}
              onChange={(v) => settitle(v.target.value)}
            />
            <Autocomplete
              style={{ marginTop: 10 }}
              id="free-solo-demo"
              variant="filled"
              freeSolo
              getOptionLabel={(option) => option.title}
              options={folders}
              inputValue={folderTitle}
              onChange={(event, v) => setfolderTitle(v.title)}
              renderInput={(params) => (
                <TextField
                  variant="filled"
                  required
                  {...params}
                  onChange={(v) => {
                    setfolderTitle(v.target.value);
                  }}
                  label="Dossier"
                />
              )}
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
export default AddProject;
