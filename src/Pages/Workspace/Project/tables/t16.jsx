import { useSelector } from "react-redux";

import { MyMaterial } from "./materialTable";
import { DataTable, getVal } from "./factoring";
import { columnsT6 } from "./t6";
import SendRequest from "../../../../Services/requests";
import { useDispatch } from "react-redux";
import { notifier } from "../../../../redux/notifSlice";
import { updateTableInside } from "../../../../redux/projectSlice";

const num = "t16";
const T16 = () => {
  const stateList = useSelector((state) => state.project[num]).map((d) =>
    Object.assign({}, { ...d, value: parseFloat(d.value) })
  );
  const state = useSelector((state) => state.project);
  const pid = useSelector((state) => state.project.id);
  const dis = useDispatch();

  const updateRow = (oldData, newData, resolve, reject) => {
    console.log("updateRow");
    SendRequest({
      endpoint: "/table/t6/" + pid + "/" + oldData.num,
      method: "put",
      body: { data: newData, table: "t16", list: stateList },
      success: (res) => {
        console.log("get result");
        dis(updateTableInside({ newData, table: "t16" }));
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
      title="Répartition comptes de régularisation-actif - Bilan d'ouverture"
      data={DataTable({
        currentList: dataT16,
        state,
        stateList,
        hideNum: true,
        type: "v2",
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

export default T16;

export const dataT16 = [
  {
    i: 0,
    title: "3491 Charges constatées d'avance",
    p: 1,
    fromTableList: [
      {
        table: "t6",
        row: 3491,
      },
    ],
  },
  {
    space: true,
  },
  {
    title: "Achats revendus de marchandises",
    i: 1,
    num: 1,
  },
  {
    title: "Achats de matières et fournitures",
    i: 2,
    num: 2,
  },
  {
    title: "Autres achats et charges externes",
    i: 3,
    num: 3,
  },
  {
    title: "Impôts et taxes",
    i: 4,
    num: 4,
  },
  {
    title: "Charges du personnel",
    i: 5,
    num: 5,
  },
  {
    title: "Autres charges d'exploitation",
    i: 6,
    num: 6,
  },
  {
    title: "Charges financières",
    i: 7,
    num: 7,
  },
  {
    title: "Charges exceptionnels",
    i: 8,
    num: 8,
  },
  {
    i: 9,
    p: 1,
    title: "3491 Charges constatées d'avance",
    relation: [1, 2, 3, 4, 5, 6, 7, 8],
  },
  {
    space: true,
  },
  {
    title: "Contrôle",
    p: 1,
    fromLocal: [{ row: 0 }, { row: 9, ne: true }],
  },
  {
    space: true,
  },
  {
    p: 2,
    title: "3491 Charges constatées d'avance",
    fromLocal: [{ row: 0 }],
  },
  ////
  {
    space: true,
  },
  {
    i: 10,
    title: "3493 Intérêts courus et non échus à percevoir",
    p: 1,
    fromTableList: [
      {
        table: "t6",
        row: 3493,
      },
    ],
  },
  {
    space: true,
  },
  {
    title: "Produits financiers",
    i: 11,
    num: 11,
  },

  {
    i: 12,
    p: 1,
    title: "3493 Intérêts courus et non échus à percevoir",
    relation: [11],
  },
  {
    space: true,
  },
  {
    title: "Contrôle",
    p: 1,
    fromLocal: [{ row: 10 }, { row: 12, ne: true }],
  },
  {
    space: true,
  },
  {
    p: 2,
    title: "3493 Intérêts courus et non échus à percevoir",
    fromLocal: [{ row: 10 }],
  },
  ///
  {
    space: true,
  },
  {
    i: 13,
    title: "3495 Comptes de répartition périodique des charges ",
    p: 1,
    fromTableList: [
      {
        table: "t6",
        row: 3495,
      },
    ],
  },
  {
    space: true,
  },
  {
    title: "Achats revendus de marchandises",
    i: 14,
    num: 14,
  },
  {
    title: "Achats de matières et fournitures",
    i: 15,
    num: 15,
  },
  {
    title: "Autres achats et charges externes",
    i: 16,
    num: 16,
  },
  {
    title: "Impôts et taxes",
    i: 17,
    num: 17,
  },
  {
    title: "Charges du personnel",
    i: 18,
    num: 18,
  },
  {
    title: "Autres charges d'exploitation",
    i: 19,
    num: 19,
  },
  {
    title: "Charges financières",
    i: 20,
    num: 20,
  },
  {
    title: "Charges exceptionnels",
    i: 21,
    num: 21,
  },
  {
    i: 22,
    p: 1,
    title: "3493 Intérêts courus et non échus à percevoir",
    relation: [14, 15, 16, 17, 18, 19, 20, 21],
  },
  {
    space: true,
  },
  {
    title: "Contrôle",
    p: 1,
    fromLocal: [{ row: 13 }, { row: 22, ne: true }],
  },
  {
    space: true,
  },
  {
    p: 2,
    title: "3493 Intérêts courus et non échus à percevoir",
    fromLocal: [{ row: 13 }],
  },
];
