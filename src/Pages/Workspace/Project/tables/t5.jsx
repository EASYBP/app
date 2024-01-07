import { Check, UploadFile } from "@mui/icons-material";
import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  MenuItem,
  Select,
  Slider,
  styled,
} from "@mui/material";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as XLSX from "xlsx";
import { notifier } from "../../../../redux/notifSlice";
import { updateTable } from "../../../../redux/projectSlice";

import SendRequest from "../../../../Services/requests";

import { DisplayValue, GetValString } from "./factoring";
import { useWaiting } from "./hooks";
import { MyMaterial, cellStyle } from "./materialTable";
const columns = [
  {
    title: "Compte",
    field: "compte",
    cellStyle,
  },
  {
    title: "Intitulé",
    field: "intitule",
    cellStyle,
  },
  {
    title: "Débit",
    field: "debit",
    align: "right",
    cellStyle,
  },
  {
    title: "Crédit",
    field: "credit",
    align: "right",
    cellStyle,
  },
];
const Input = styled("input")({
  display: "none",
});

const T5 = () => {
  const [isLoading, setisLoading] = useState(false);
  const { data, bp, bp2 } = useSelector((state) => ({
    bp: state.project.t6,
    bp2: state.project.t7,
    data: state.project.t5.map((d) => Object.assign({}, d)),
  }));

  return (
    <div>
      {isLoading ? (
        <div className="flex justify-center h-screen">
          <CircularProgress size={40} />
        </div>
      ) : (
        <div className="flex items-center flex-col  gap-4">
          <div className="w-full">
            <Import bp={bp} bp2={bp2} />
            <MyMaterial
              title={"Balance générale"}
              data={data.map((d) => ({
                ...d,
                credit: GetValString(d.credit || 0),
                debit: GetValString(d.debit || 0),
              }))}
              rowStyle={(rowData) => ({
                fontSize: 12,
              })}
              columns={columns}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default T5;

const Import = ({ bp, bp2 }) => {
  const dis = useDispatch();
  const [isLoading, setisLoading] = useState(false);
  const [valid, setValid] = useState(false);
  const [_data, set_data] = useState([]);
  const [lines, setlines] = useState(0);
  const [min, setmin] = useState(0);
  const [max, setmax] = useState(0);
  const [sheet, setsheet] = useState(0);
  const [wb, setwb] = useState(null);
  const onLoadList = (e) => {
    const [file] = e.target.files;
    const reader = new FileReader();
    reader.onload = (evt) => {
      const bstr = evt.target.result;
      const tempwb = XLSX.read(bstr, { type: "binary" });
      setwb(tempwb);
      setsheet(tempwb.SheetNames[0]);
      setlines(
        XLSX.utils.sheet_to_json(tempwb.Sheets[tempwb.SheetNames[0]]).length
      );
      setmax(
        XLSX.utils.sheet_to_json(tempwb.Sheets[tempwb.SheetNames[0]]).length
      );
      console.log("woking");
    };
    reader.readAsBinaryString(file);
  };
  const pid = useSelector((state) => state.project.id);
  const nav = useNavigate();
  const Valid = () => {
    const tempData = XLSX.utils.sheet_to_json(wb.Sheets[sheet]);

    if (tempData.length !== 0) {
      try {
        const data = tempData.slice(min <= 0 ? min : min - 1, max);
        const keys = Object.keys(data[0]);
        const comptes = data.map((d) => ({
          compte: parseInt(d[keys[0]]),
          intitule: d[keys[1]],
          debit: parseFloat(d[keys[2]]) ?? 0.0,
          credit: parseFloat(d[keys[3]]) ?? 0.0,
        }));
        console.log(comptes);
        setisLoading(true);

        SendRequest({
          endpoint: "/table/t5/" + pid,
          method: "post",
          body: { comptes: comptes, bp: bp, bp2: bp2 },
          success: (res) => {
            dis(notifier({ message: "Comptes importés et validés" }));
            nav(0);
          },
          failed: (err) =>
            dis(notifier({ message: "Impossible de valider", type: "error" })),
          end: () => {
            setisLoading(false);
            setwb(null);
          },
        });
      } catch (error) {
        console.log(error);
        dis(notifier({ message: "Erreur d'importation", type: "error" }));
        setisLoading(false);
        setwb(null);
      }
    }
  };

  return (
    <div className=" container mx-auto flex flex-row justify-end gap-3 items-center w-full  mt-6">
      {wb && (
        <>
          <Dialog
            open={wb}
            onClose={() => setwb(null)}
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle>
              <span className="text-base">
                Choisir la feuille et le nombre de lignes à importer
              </span>
            </DialogTitle>
            <DialogContent dividers>
              <div className="flex flex-col">
                <Select
                  value={sheet}
                  size="small"
                  sx={{ padding: "0px" }}
                  onChange={(v) => {
                    setsheet(v.target.value);
                  }}
                >
                  {wb.SheetNames.map((w, i) => (
                    <MenuItem key={i} value={w}>
                      {w}
                    </MenuItem>
                  ))}
                </Select>
                <Slider
                  getAriaLabel={() => "Minimum distance"}
                  value={[min, max]}
                  onChange={(v) => {
                    console.log(v);
                    setmin(v.target.value[0]);
                    setmax(v.target.value[1]);
                  }}
                  defaultValue={100}
                  max={XLSX.utils.sheet_to_json(wb.Sheets[sheet]).length}
                  // scale={wb.Sheets[sheet]}
                  valueLabelDisplay="on"
                  disableSwap
                  className="w-full mt-10"
                />
              </div>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setwb(null)} variant="text" type="submit">
                Annuler
              </Button>
              {isLoading ? (
                <Button variant="text" color="primary">
                  <CircularProgress size={20} />
                </Button>
              ) : (
                <Button
                  onClick={Valid}
                  disableElevation
                  variant="contained"
                  type="submit"
                >
                  Valider
                </Button>
              )}
            </DialogActions>
          </Dialog>
        </>
      )}
      <label htmlFor="contained-button-file">
        <Input
          accept=".xlsx, .xls, .csv"
          id="contained-button-file"
          type="file"
          onChange={onLoadList}
        />
        <Button
          startIcon={<UploadFile />}
          variant="contained"
          color="secondary"
          size="small"
          component="span"
        >
          Importer
        </Button>
      </label>
    </div>
  );
};
