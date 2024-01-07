import { useSelector } from "react-redux";

import { MyMaterial } from "./materialTable";
import { DataTable, getVal } from "./factoring";
import { columnsT6 } from "./t6";
import SendRequest from "../../../../Services/requests";
import { useDispatch } from "react-redux";
import { notifier } from "../../../../redux/notifSlice";
import { updateTableInside } from "../../../../redux/projectSlice";
import { formuleT7T9T11 } from "./tv2/dataT2";

const num = "t17";
const T17 = () => {
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
      body: { data: newData, table: num, list: stateList },
      success: (res) => {
        console.log("get result");
        dis(updateTableInside({ newData, table: num }));
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
      title="Répartition comptes de régularisation-passif - Bilan d'ouverture"
      data={DataTable({
        currentList: dataT17,
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

          backgroundColor: rowData?.gris
            ? "#7f7f7f"
            : rowData?.p === 1
            ? "rgb(253, 233, 217)"
            : rowData?.p === 2
            ? "rgb(49, 133, 155)"
            : rowData?.p === 3 && "rgb(51, 51, 51)",
        };
      }}
      editable={{
        isEditable: (rowData) => !rowData.p || rowData.space || !rowData.gris, // only name(a) rows would be editable
        isEditHidden: (rowData) => rowData.p || rowData.space || rowData.gris,
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            updateRow(oldData, newData, resolve, reject);
            setTimeout(() => {}, 1000);
          }),
      }}
    />
  );
};

export default T17;

export const dataT17 = [
  {
    i: 0,
    title: "4491 Produits constatés d'avance",
    p: 1,
    fromTableList: [...formuleT7T9T11(4491)],
  },
  {
    space: true,
  },
  {
    title: "Ventes de marchandises",
    i: 1,
    num: 1,
  },
  {
    title: "Vente de biens et services produits",
    i: 2,
    num: 2,
  },
  {
    title: "Immobilisations produites par l'entreprise pour elle-même",
    i: 3,
    num: 3,
    gris: true,
  },
  {
    title: "Subventions d'exploitation",
    i: 4,
    num: 4,
  },
  {
    title: "Autres produits d'exploitation",
    i: 5,
    num: 5,
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
    title: "4491 Produits constatés d'avance",
    relation: [1, 2, 3, 4, 5, 7, 8],
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
    title: "4491 Produits constatés d'avance",
    fromLocal: [{ row: 0 }],
  },
  ////
  {
    space: true,
  },
  {
    i: 10,
    title: "4493 Intérêts courus et non échus à payer",
    p: 1,
    fromTableList: [...formuleT7T9T11(4493)],
  },
  {
    space: true,
  },
  {
    title: "Charges financières",
    i: 11,
    num: 11,
  },

  {
    i: 12,
    p: 1,
    title: "4493 Intérêts courus et non échus à payer",
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
    title: "4493 Intérêts courus et non échus à payer",
    fromLocal: [{ row: 10 }],
  },
  ///
  {
    space: true,
  },
  {
    i: 13,
    title: "4495 Comptes de répartition périodique des produits",
    p: 1,
    fromTableList: [...formuleT7T9T11(4495)],
  },
  {
    space: true,
  },
  {
    title: "Ventes de marchandises",
    i: 20,
    num: 1,
  },
  {
    title: "Vente de biens et services produits",
    i: 14,
    num: 14,
  },
  {
    title: "Immobilisations produites par l'entreprise pour elle-même",
    i: 15,
    num: 15,
    gris: true,
  },
  {
    title: "Subventions d'exploitation",
    i: 16,
    num: 16,
  },
  {
    title: "Autres produits d'exploitation",
    i: 17,
    num: 17,
  },
  {
    title: "Charges financières",
    i: 18,
    num: 18,
  },
  {
    title: "Charges exceptionnels",
    i: 19,
    num: 19,
  },
  {
    i: 22,
    p: 1,
    title: "4495 Comptes de répartition périodique des produits",
    relation: [14, 15, 16, 17, 18, 19, 20],
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
    title: "4495 Comptes de répartition périodique des produits",
    fromLocal: [{ row: 13 }],
  },
];
