import { useDispatch, useSelector } from "react-redux";
import {} from "./constante";

import { updateTable, updateTableInside } from "../../../../redux/projectSlice";

import SendRequest from "../../../../Services/requests";
import { notifier } from "../../../../redux/notifSlice";

import { TotalPassif } from "./bp";

import { MyMaterial } from "./materialTable";
import { DataTable } from "./factoring";
import { columnsT6 } from "./t6";

const T15 = () => {
  const data = useSelector((state) => state.project.t15).map((d) =>
    Object.assign({}, { ...d, value: parseFloat(d.value) })
  );
  const state = useSelector((state) => state.project);
  const pid = useSelector((state) => state.project.id);
  const dis = useDispatch();

  const updateRow = (oldData, newData, resolve, reject) => {
    console.log(pid);
    SendRequest({
      endpoint: "/table/t6/" + pid + "/" + oldData.num,
      method: "put",
      body: { data: newData, table: "t15" },
      success: (res) => {
        dis(updateTableInside({ newData, table: "t15" }));
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
      title="Répartition des Matières et fournitures consommables issues du Bilan d'ouverture"
      data={DataTable({
        currentList: dataT15,
        state,
        stateList: data,
        type: "v2",
      })}
      columns={columnsT6}
      portrait
      rowStyle={(rowData) => {
        return {
          paddingLeft: "0px",
          padding: "0px",
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
        isEditable: (rowData) =>
          !rowData.relation || !rowData.specialLocal || !rowData.fromTable, // only name(a) rows would be editable
        isEditHidden: (rowData) =>
          rowData.relation ||
          rowData.special ||
          rowData.specialLocal ||
          rowData.fromTable,

        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              updateRow(oldData, newData, resolve, reject);
            }, 1000);
          }),
      }}
    />
  );
};

export default T15;

export const dataT15 = [
  {
    i: 1,
    num: 320,
    title: "Matières et fournitures consommables",
    fromTable: "t6",
    fromNumRow: 312,
  },
  { i: 2, num: 3121, title: "Matières premières" },
  {
    i: 3,
    num: 3122,
    title: "Matières et fournitures consommables",
  },
  {
    i: 4,
    num: 3126,
    title: "Matières et fournitures consommables en cours de route",
  },
  {
    i: 5,
    num: 3128,
    title: "Autres matières et fournitures consommables",
  },
  { paddingLeft: "30px", i: 6, num: 3123, title: "Emballages" },

  {
    i: 8,

    num: 320,
    title: "Matières et fournitures consommables",
    relation: [2, 3, 4, 5, 6],
  },
  {
    i: 9,
    p: 1,
    title: "Contrôle",
    // number 1 - number 2
    specialLocal: [{ i: 1 }, { i: 8, ne: true }],
  },
  { special: "space", space: true },
  { special: "space", space: true },
  {
    i: 10,
    p: 2,
    title: "Stocks et en-cours brut",
    // number 1 - number 2
    relation: [9],
  },
];
