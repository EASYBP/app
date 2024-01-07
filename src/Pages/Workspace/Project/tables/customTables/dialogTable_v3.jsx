import { FolderTwoTone } from "@mui/icons-material";
import {
  Button,
  CircularProgress, Select,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField, Autocomplete
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { desactif } from "../../../../../redux/dialogSlice";
import { notifier } from "../../../../../redux/notifSlice";
import { updateAnnexe2 } from "../../../../../redux/projectSlice";
import SendRequest, {
  SendRequestThunk,
} from "../../../../../Services/requests";
import { decodeString } from "../factoring";

const UpdateValue = ({ table, state, neq, completions }) => {
  const { value: v, display } = useSelector((state) => state.dialog);
  const nav = useNavigate();
  const [data, setdata] = useState({});
  const [value, setValue] = useState("");

  const dis = useDispatch();
  useEffect(() => {
    setValue(v.initValue?.split("%")[0]);
    setdata({ ...v });
  }, [display, v]);

  const Submit = (event) => {
    event.preventDefault();
    const { initValue, section, compte, field, annee, mois, isSection } = data;

    let val =
      v.field == "title" || v.field == "commentaire"
        ? value
        : decodeString(value);
    console.log(neq ? "neq" : "pos");
    if (neq) {
      if (val > 0 && field == "ht") {
        val = val * -1;
      }
    }
    SendRequestThunk({
      endpoint:
        "/table/a2/" +
        state.id +
        `/${data.fullData._id ? data.fullData._id : section}` +
        `/${compte}`,
      method: "put",
      body: {
        data: {
          value: val,
          property: data,
          params: { compte, section },
        },
        table,
      },
      success: (res) => {
        let val =
          v.field == "title" || v.field == "commentaire"
            ? value
            : decodeString(value);
        console.log(neq ? "neq" : "pos");
        if (neq) {
          if (val > 0 && field == "ht") {
            val = val * -1;
          }
        }
        dis(
          updateAnnexe2({
            value: val,
            property: data,
            response: res.data,
            table,
          })
        );
        dis(desactif());
        // nav(0);
      },
      failed: (err) => {
        console.log(err);
        dis(notifier({ message: "Erreur de modification", type: "error" }));
      },
    });

    // dis(
    //   addFolder({
    //     data: title,
    //     callback: () => {
    //       setopen(false);
    //       settitle("");
    //     },
    //   })
    // );

    // console.log(roles);
  };

  return (
    <>
      <Dialog
        open={display}
        onClose={() => dis(desactif())}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>
          <span>Modifier la valeur</span>
        </DialogTitle>
        <form onSubmit={Submit} className="w-[500px]">
          <DialogContent dividers>
            {completions &&v.field == "title" || v.field == "commentaire" ?
              <Autocomplete
                fullWidth
                sx={{

                  input: {
                    textAlign:
                      v.field == "title" || v.field == "commentaire"
                        ? "left"
                        : "right",

                    fontSize: 14,
                    padding: "10px 10px",
                  },
                  "& legend": { display: "none" },
                  "& fieldset": { top: 0 },
                }}
                freeSolo
                options={data.field=='title'? completions.title:completions.commentaires}
                defaultValue={value}
                onChange={(e, v) => {
                  setValue(v)
                }}
                renderInput={(params) => <TextField {...params} />}
              />
              : <TextField
                variant="filled"
                fullWidth
                sx={{
                  input: {
                    textAlign:
                      v.field == "title" || v.field == "commentaire"
                        ? "left"
                        : "right",

                    fontSize: 14,
                    padding: "10px 10px",
                  },
                  "& legend": { display: "none" },
                  "& fieldset": { top: 0 },
                }}
                className="text-right"
                value={value}
                onChange={(v) => {
                  setValue(v.target.value);
                }}
              />}


          </DialogContent>

          <DialogActions>
            <Button onClick={() => dis(desactif())}>Annuler</Button>

            {/* {isLoading ? (
              <Button variant="text" color="primary">
                <CircularProgress size={20} />
              </Button>
            ) : ( */}
            <Button disableElevation variant="contained" type="submit">
              valider
            </Button>
            {/* )} */}
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};
export default UpdateValue;
