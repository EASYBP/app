import { useSelector, useDispatch } from "react-redux";

import { TextField } from "@mui/material";

import { TotalActif } from "./bp";

import { MyMaterial, cellStyle } from "./materialTable";
import { DataTable } from "./factoring";
import { getColorCell } from "./specialfunctions";
import {
  updateTable,
  updateTableWithItem,
} from "../../../../redux/projectSlice";
import SendRequest from "../../../../Services/requests";
import { notifier } from "../../../../redux/notifSlice";
import { formuleT6T9T11 } from "./tv2/dataT2";
export const columnsT14 = [
  {
    title: "HD",
    field: "title",
    cellStyle,
    editComponent: (props) => {
      return (
        <TextField
          fullWidth
          inputProps={{ readOnly: true }}
          variant="outlined"
          value={props.value}
          disabled
        />
      );
    },
  },
  {
    title: "Immobilisation acquises",
    field: "d",
    align: "right",
    cellStyle: { padding: "2px 10px 2px 10px", whiteSpace: "nowrap" },
    editComponent: (props) => {
      return (
        <div className="flex justify-end">
          <TextField
            variant="outlined"
            sx={{ input: { textAlign: "right" } }}
            value={props.value.toString().replaceAll(" ", "")}
            onChange={(e) => props.onChange(e.target.value)}
          />
        </div>
      );
    },
  },
  {
    title: "Immobilisation Produites par l'entreprise pour elle-même",
    field: "e",
    align: "right",
    cellStyle: { padding: "2px 10px 2px 10px", whiteSpace: "nowrap" },

    editComponent: (props) => {
      return (
        <div className="flex justify-end">
          <TextField
            variant="outlined"
            sx={{ input: { textAlign: "right" } }}
            value={props.value.toString().replaceAll(" ", "")}
            onChange={(e) => props.onChange(e.target.value)}
          />
        </div>
      );
    },
  },
  {
    title: "Total",
    field: "f",
    align: "right",
    cellStyle: { padding: "2px 10px 2px 10px", whiteSpace: "nowrap" },
    editComponent: (props) => {
      return (
        <TextField
          fullWidth
          inputProps={{ readOnly: true }}
          variant="outlined"
          value={props.value}
          disabled
        />
      );
    },
  },
  {
    title: "Immobilisation selon le bilan d'ouverture ouverture",
    field: "g",
    align: "right",
    cellStyle: { padding: "2px 10px 2px 10px", whiteSpace: "nowrap" },
    editComponent: (props) => {
      return (
        <TextField
          fullWidth
          inputProps={{ readOnly: true }}
          variant="outlined"
          disabled
          value={props.value}
        />
      );
    },
  },
  {
    title: "Ecart / Contrôle",
    field: "h",
    align: "right",
    cellStyle: { padding: "2px 10px 2px 10px", whiteSpace: "nowrap" },
    editComponent: (props) => {
      return (
        <TextField
          fullWidth
          disabled
          inputProps={{ readOnly: true }}
          variant="outlined"
          value={props.value}
        />
      );
    },
  },
];

const T14 = () => {
  const stateList = useSelector((state) => state.project.t14).map((d) =>
    Object.assign({}, { ...d, e: parseFloat(d.e), d: parseFloat(d.d) })
  );

  const state = useSelector((state) => state.project);
  const dis = useDispatch();
  const updateRow = ({ oldData, newData, resolve, reject }) => {
    SendRequest({
      endpoint: "/table/t14/" + state.id + "/" + oldData.num,
      method: "put",
      body: { data: newData, table: "t14" },
      success: (res) => {
        dis(
          updateTableWithItem({
            table: "t14",
            item: {
              ...newData,
              e: parseFloat(newData.e.toString().replaceAll(",", ".")) || 0,
              d: parseFloat(newData.d.toString().replaceAll(",", ".")) || 0,
            },
          })
        );
        resolve();
      },
      failed: (err) => {
        dis(notifier({ message: "Erreur de modification", type: "error" }));
        reject();
      },
    });
  };
  return (
    <MyMaterial
      title="Répartition des Immobilisations issues du Bilan d'ouverture"
      maxWidth={true}
      data={DataTable({
        type: "t14",
        stateList,
        state,
        currentList: datat14,
      })}
      columns={columnsT14}
      rowStyle={(rowData) => {
        return {
          padding: "0px",
          margin: "0px",
          fontSize: rowData.relation ? 13 : 12,
          fontWeight: rowData.relation && "bolder",
          color: rowData?.p === 2 ? "white" : rowData?.p === 3 && "yellow",
          backgroundColor: getColorCell(rowData),
        };
      }}
      editable={{
        isEditable: (rowData) => !rowData.relation, // only name(a) rows would be editable
        isEditHidden: (rowData) => rowData.relation || rowData.special,
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              updateRow({ oldData, newData, resolve, reject });
            }, 1000);
          }),
      }}
    />
  );
};

export default T14;

export const datat14 = [
  { i: 1, num: 211, title: "Frais préliminaires" },
  { i: 2, num: 212, title: "Charges q répartir sur plusieurs exercices" },
  { i: 3, num: 213, title: "Primes de remboursement des obligaions" },
  { i: 4, p: 1, title: "Valeurs brutes", relation: [1, 2, 3] },
  { i: 5, num: 2811, title: "Amortisements des frais préliminaires" },
  { i: 6, num: 2812, title: "Amortisements des des charges à repartir" },
  {
    i: 7,
    num: 2813,
    title: "Amortisements des primes de remboursement des obligations",
  },
  { i: 8, p: 1, title: "Amortissements et dépréciations", relation: [5, 6, 7] },
  { i: 9, p: 2, title: "Immobilisation En Non Valeur", relation: [4, 8] },
  //
  { i: 10, num: 221, title: "Immobilisation en recherche et développement" },
  { i: 11, num: 222, title: "Brevets, marques, droits et valeurs similaires" },
  { i: 12, num: 223, title: "Fonds commercial" },
  { i: 13, num: 228, title: "Autres immobilisations incorporelles" },
  { i: 14, p: 1, title: "Valeurs brutes", relation: [10, 11, 12, 13] },
  {
    i: 15,
    num: 2821,
    title: "Amortisements de l'immobilisation en recherche et développement",
  },
  {
    i: 16,
    num: 2822,
    title: "Amortisements des brevets, marques, droits et valeurs similaires",
  },
  { i: 17, num: 2823, title: "Amortisements du fonds commercial" },
  {
    i: 0,
    num: 2828,
    title: "Amortisements des autres immobilisations incorporelles",
  },
  {
    i: 18,
    num: 2920,
    title: "Provisions pour dépréciation des immobilisations incorporelles",
  },
  {
    i: 19,
    p: 1,
    title: "Amortissements et dépréciations",
    relation: [15, 16, 17, 18, 0],
  },
  { i: 20, p: 2, title: "Immobilisation incorporelles", relation: [14, 19] },
  ///
  { i: 21, num: 231, title: "Terrains" },
  { i: 22, num: 232, title: "Constructions" },
  { i: 23, num: 233, title: "Installations techniques, matériel et outillage" },
  { i: 24, num: 234, title: "Matériel de transport" },
  {
    i: 25,
    num: 235,
    title: "Mobilier, matériel de bureau et aménagements divers",
  },
  { i: 26, num: 238, title: "Autres immobilisations corporelles" },
  { i: 27, num: 239, title: "Immobilisations corporelles en cours" },
  {
    i: 28,
    p: 1,
    title: "Valeurs brutes",
    relation: [21, 22, 23, 24, 25, 26, 27],
  },
  { i: 29, num: 2831, title: "Amortissements des terrains" },
  { i: 30, num: 2832, title: "Amortissements des constructions" },
  {
    i: 31,
    num: 2833,
    title: "Amortissements des installations techniques, matériel et outillage",
  },
  { i: 32, num: 2834, title: "Amortissements du matériel de transport" },
  {
    i: 33,
    num: 2835,
    title:
      "Amortissements du mobilier, matériel de bureau et aménagements divers",
  },
  {
    i: 34,
    num: 2838,
    title: "Amortissements des autres immobilisations corporelles",
  },
  {
    i: 35,
    num: 2930,
    title: "Provisions pour déprécation des immobilisations corporelles",
  },
  {
    i: 36,

    p: 1,
    title: "Amortissements et dépréciations",
    relation: [29, 30, 31, 32, 33, 34, 35],
  },
  {
    i: 37,

    p: 2,
    title: "Immobilisations corporelles",
    relation: [28, 36],
  },
  ///
  {
    i: 38,
    num: 241,
    title: "Prêts immobilsés",
  },
  {
    i: 39,
    num: 248,
    title: "Autres créances financières",
  },
  {
    i: 40,
    num: 251,
    title: "Titres de participation",
  },
  {
    i: 41,
    num: 258,
    title: "Autres titres immobilisés",
  },
  {
    i: 42,

    p: 1,
    title: "Valeurs brutes",
    relation: [38, 39, 40, 41],
  },
  {
    i: 43,
    num: 2941,
    title: "Provisions pour dépréciation des prêts immobilsés",
  },
  {
    i: 44,
    num: 2948,
    title: "Provisions pour dépréciation des autres créances financières",
  },
  {
    i: 45,
    num: 2951,
    title: "Provisions pour dépréciation des titres de participation",
  },
  {
    i: 46,
    num: 2958,
    title: "Provisions pour dépréciation des autres titres immobilisés",
  },
  {
    i: 47,

    p: 1,
    title: "Amortissements et dépréciations",
    relation: [43, 44, 45, 46],
  },
  {
    i: 48,

    p: 2,
    title: "Immobilisations financières",
    relation: [42, 47],
  },
];
