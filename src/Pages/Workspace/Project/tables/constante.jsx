import { forwardRef } from "react";

import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import {
  Autocomplete,
  Checkbox,
  FormControlLabel,
  TextField,
} from "@mui/material";
import { CheckBox } from "@mui/icons-material";
import { cellStyle } from "./materialTable";

export const tableIcons = {
  Add: forwardRef((props, ref) => (
    <AddBox {...props} ref={ref} color="primary" />
  )),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => (
    <DeleteOutline {...props} ref={ref} color="error" className="text-[18px]" />
  )),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => (
    <Edit {...props} ref={ref} className="text-[18px]" />
  )),
  Export: forwardRef((props, ref) => (
    <SaveAlt {...props} ref={ref} color="primary" />
  )),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

export const localisation = {
  body: {
    emptyDataSourceMessage: "Tableau vide",
    addTooltip: "Ajouter",
    deleteTooltip: "Supprimer",
    editTooltip: "Editer",
    filterRow: {
      filterTooltip: "Filtrer",
    },
    editRow: {
      deleteText: "Voulez-vous supprimer cette ligne?",
      cancelTooltip: "Annuler",
      saveTooltip: "Enregistrer",
    },
  },
  grouping: {
    placeholder: "Tirer l'entête ...",
    groupedBy: "Grouper par:",
  },
  header: {
    actions: "Actions",
  },
  pagination: {
    labelDisplayedRows: "{from}-{to} de {count}",
    labelRowsSelect: "lignes",
    labelRowsPerPage: "lignes par page:",
    firstAriaLabel: "Première page",
    firstTooltip: "Première page",
    previousAriaLabel: "Page précédente",
    previousTooltip: "Page précédente",
    nextAriaLabel: "Page suivante",
    nextTooltip: "Page suivante",
    lastAriaLabel: "Dernière page",
    lastTooltip: "Dernière page",
  },
  toolbar: {
    addRemoveColumns: "Ajouter ou supprimer des colonnes",
    nRowsSelected: "{0} ligne(s) sélectionée(s)",
    showColumnsTitle: "Voir les colonnes",
    showColumnsAriaLabel: "Voir les colonnes",
    exportTitle: "Exporter",
    exportAriaLabel: "Exporter",
    exportCSVName: "Exporter en EXCEL",
    exportPDFName: "Exporter en PDF",
    searchTooltip: "Chercher",
    searchPlaceholder: "Chercher",
  },
};

export const checkColumn = (index) => {
  return {
    title: "BP N+" + index,
    field: "bp" + index,
    width: null,
    cellStyle,
    // cellStyle: { width: 120, ...cellStyle },
    align: "center",
    headerStyle: {
      fontSize: "10px",
    },

    render: (rowData) => (
      <div className="flex justify-center w-full -translate-x-3">
        <CheckBox
          color="secondary"
          style={{
            fontSize: "18px",
          }}
          className={!(rowData["bp" + index.toString()] === "X") && "hidden"}
        />
      </div>
    ),

    editComponent: (props) => {
      console.log(props);
      return (
        <div className="flex justify-center">
          <FormControlLabel
            control={
              <Checkbox
                value={props.value}
                checked={props.value === "X" ? true : false}
                onChange={(e) => {
                  props.onChange(e.target.checked ? "X" : "");
                }}
              />
            }
            // label={"BP N+" + index}
          />
        </div>
      );
    },
  };
};

export const titleColumn = () => {
  const options = [
    "dsdsdsnvjsvsds",
    "Dsdscsdssdzd",
    "Dsvsdsdvsvs",
    "Sdvkrvmsrvssv",
  ];
  return {
    title: "Intitulé",
    field: "name",
    cellStyle: {
      padding: "2px 10px 2px 10px",
      width: "300px",
    },
    // cellStyle: {
    //   minWidth: 400,
    //   ...cellStyle,
    // },
    editComponent: (props) => {
      return (
        <Autocomplete
          style={{ marginTop: 10 }}
          id="free-solo-demo"
          variant="filled"
          freeSolo
          getOptionLabel={(option) => option}
          options={options}
          inputValue={props.value}
          onChange={(event, v) => props.onChange(v)}
          renderInput={(params) => (
            <TextField
              variant="outlined"
              required
              fullWidth
              {...params}
              onChange={(v) => {
                props.onChange(v.target.value);
              }}
              placeholder="Intitulé"
            />
          )}
        />
      );
    },
  };
};

/////////////
