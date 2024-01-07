import { useSelector } from "react-redux";

import { MyMaterial } from "./materialTable";
import { DataTable, getVal } from "./factoring";
import { columnsT6 } from "./t6";
import SendRequest from "../../../../Services/requests";
import { useDispatch } from "react-redux";
import { notifier } from "../../../../redux/notifSlice";
import { updateTable } from "../../../../redux/projectSlice";

const T10 = () => {
  const data = useSelector((state) => state.project.t10).map((d) =>
    Object.assign({}, { ...d, value: parseFloat(d.value) })
  );
  const bs = useSelector((state) => state.project.t7).map((d) =>
    Object.assign({}, { ...d, value: parseFloat(d.value) })
  );
  const pid = useSelector((state) => state.project.id);
  const dis = useDispatch();

  const getControle = (e1, e2) =>
    bs.filter((b) => b.i === e1)[0].value -
    getVal({
      item: dataT10[dataT10.findIndex((d) => d.i === e2)],
      data,
      list: dataT10,
      bs,
    });

  const updateRow = (oldData, newData, resolve, reject) => {
    SendRequest({
      endpoint: "/table/t6/" + pid + "/" + oldData.num,
      method: "put",
      body: { data: newData, table: "t10", list: data },
      success: (res) => {
        console.log(res);
        data[data.findIndex((d) => d.i === newData.i)].value =
          parseFloat(newData.value.toString().replaceAll(",", ".")) || 0;
        dis(updateTable({ data, table: "t10" }));
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
      title="Répartition ECP issus du Bilan d'ouverture préliminaire 2"
      data={DataTable({
        data,
        list: dataT10,
        bs,
        specialFunction: getControle,
      })}
      portrait
      columns={columnsT6}
      rowStyle={(rowData) => {
        return {
          margin: "0px",
          fontSize: rowData.p ? 13 : 12,
          fontWeight: rowData.p && "bolder",
          color: rowData?.p === 2 ? "white" : rowData?.p === 3 && "yellow",

          backgroundColor:
            rowData?.p === 1
              ? "rgb(253, 233, 217)"
              : rowData?.p === 2
              ? "rgb(49, 133, 155)"
              : rowData?.p === 3 && "rgb(51, 51, 51)",
        };
      }}
      editable={{
        isEditable: (rowData) => !rowData.p || rowData.space, // only name(a) rows would be editable
        isEditHidden: (rowData) => rowData.p || rowData.space,
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            updateRow(oldData, newData, resolve, reject);
            setTimeout(() => {}, 1000);
          }),
      }}
    />
  );
};

export default T10;

export const dataT10 = [
  {
    i: 1,
    p: 1,
    title: "ECP-1710 Augmentation des créances immobilisées",
    bs: 50,
  },
  { i: 2, space: true, special: "space" },
  { i: 3, num: 241, title: "Prêts immobilsés" },
  { i: 4, num: 248, title: "Autres créances financières" },
  { i: 5, num: 251, title: "Titres de participation" },
  { i: 6, num: 258, title: "Autres titres immobilisés" },
  {
    i: 7,
    p: 1,
    title: "ECP-1710 Augmentation des créances immobilisées",
    relation: [3, 4, 5, 6],
  },
  { i: 8, space: true, special: "space" },
  { i: 9, space: true, special: "space" },
  {
    i: 10,
    p: 1,
    title: "Contrôle",
    special: true,
    element1: 50,
    element2: 7,
  },
  { i: 2, space: true, special: "space" },
  {
    i: 10,
    p: 2,
    title: "ECP-1710 Augmentation des créances immobilisées",
    relation: [1],
  },
  { i: 11, space: true, special: "space" },
  {
    i: 12,
    p: 1,
    title: "ECP-1720 Diminution des dettes de financement",
    bs: 51,
  },
  { i: 12, space: true, special: "space" },
  { i: 13, num: 1410, title: "Emprunts obligataires" },
  { i: 15, num: 1481, title: "Emprunts auprès des établissements de crédit" },
  { i: 16, num: 1482, title: "Avances de l'Etat" },
  { i: 17, num: 1483, title: "Dettes rattachées à des participations" },
  { i: 18, num: 1484, title: "Billets de fonds" },
  { i: 19, num: 1485, title: "Avances reçues et comptes courants bloqués" },
  { i: 20, num: 1486, title: "Fournisseurs d'immobilisation" },
  { i: 21, num: 1487, title: "Dépôts et cautionnements reçues" },
  { i: 22, num: 1488, title: "Dettes de financement diverses" },
  {
    i: 23,
    p: 1,
    title: "ECP-1720 Diminution des dettes de financement",
    relation: [13, 15, 16, 17, 18, 19, 20, 21, 22],
  },
  { i: 24, space: true, special: "space" },
  { i: 25, space: true, special: "space" },
  {
    i: 26,
    p: 1,
    title: "Contrôle",
    special: true,
    element1: 51,
    element2: 23,
  },
  { i: 28, space: true, special: "space" },
  {
    i: 27,
    p: 2,
    title: "ECP-1720 Diminution des dettes de financement",
    relation: [12],
  },
];
