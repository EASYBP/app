import { useSelector } from "react-redux";

import { DataTable, getVal } from "./factoring";
import { columnsT6 } from "./t6";
import SendRequest from "../../../../Services/requests";
import { useDispatch } from "react-redux";
import { notifier } from "../../../../redux/notifSlice";
import { updateTable } from "../../../../redux/projectSlice";
import { MyMaterial } from "./materialTable";

const T9 = () => {
  const data = useSelector((state) => state.project.t9).map((d) =>
    Object.assign({}, { ...d, value: parseFloat(d.value) })
  );
  const bs = useSelector((state) => state.project.t6).map((d) =>
    Object.assign({}, { ...d, value: parseFloat(d.value) })
  );
  const pid = useSelector((state) => state.project.id);
  const dis = useDispatch();

  const getControle = (e1, e2) =>
    bs.filter((b) => b.i === e1)[0].value -
    getVal({
      item: dataT9[dataT9.findIndex((d) => d.i === e2)],
      data,
      list: dataT9,
      bs,
    });

  const updateRow = (oldData, newData, resolve, reject) => {
    SendRequest({
      endpoint: "/table/t6/" + pid + "/" + oldData.num,
      method: "put",
      body: { data: newData, table: "t9", list: data },
      success: (res) => {
        console.log(res);
        data[data.findIndex((d) => d.i === newData.i)].value =
          parseFloat(newData.value.toString().replaceAll(",", ".")) || 0;
        dis(updateTable({ data: [...data], table: "t9" }));
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
      title="Répartition ECA circulant Bilan d'ouverture préliminaire 1"
      data={DataTable({
        data,
        list: dataT9,
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

export default T9;

export const dataT9 = [
  {
    i: 1,
    p: 1,

    title: "ECA-3701 Diminution des créances circulantes",
    bs: 131,
  },
  { i: 2, space: true, special: "space" },
  {
    i: 3,
    num: 3411,
    title:
      "Fournisseurs - avances et acomptes versés sur commandes d'exploitation",
  },
  {
    i: 4,
    num: 3413,
    title: "Fournisseurs - créances pour emballages et matériel à rendre",
  },
  {
    i: 5,
    num: 3417,
    title: "Rabais, remises et ristournes à obtenir - avoirs non encore reçus",
  },
  { i: 6, num: 3418, title: "Autres fournisseurs débiteurs" },
  { i: 15, space: true, special: "space" },
  { i: 7, num: 3421, title: "Clients" },
  { i: 8, num: 3423, title: "Clients - retenues de garantie" },
  { i: 9, num: 3424, title: "Clients douteux ou litigieux" },
  { i: 10, num: 3425, title: "Clients - effets à recevoir" },
  {
    i: 11,
    num: 3427,
    title:
      "Clients - factures à établir et créances sur travaux non encore facturés",
  },
  { i: 12, num: 3428, title: "Autres clients et comptes rattachés" },
  { i: 16, space: true, special: "space" },
  { i: 13, num: 3431, title: "Avances et acomptes au personnel" },
  { i: 14, num: 3438, title: "Personnel - autres débiteurs" },
  { i: 17, space: true, special: "space" },
  { i: 18, num: 3451, title: "Subventions à recevoir" },
  { i: 19, num: 3453, title: "Acomptes sur impôts sur les résultats" },
  { i: 20, num: 3455, title: "Etat - TVA récupérable" },
  { i: 21, num: 3456, title: "Etat - crédit de TVA {suivant déclaration}" },
  { i: 22, num: 3457, title: "Etat - créance IR / {salaires, dividende,…}" },
  { i: 23, num: 3458, title: "Etat - autres comptes débiteurs {CNSS}" },
  { i: 24, space: true, special: "space" },
  { i: 25, num: 3461, title: "Associés - comptes d'apport en société" },
  {
    i: 26,
    num: 3462,
    title: "Actionnaires - capital souscrit et appelé non versé",
  },
  { i: 27, num: 3463, title: "Comptes courants des associés débiteurs" },
  { i: 28, num: 3464, title: "Associés - opérations faites en commun" },
  { i: 29, num: 3467, title: "Créances rattachées aux comptes d'associés" },
  { i: 30, num: 3468, title: "Autres comptes d'associés débiteurs " },
  { i: 31, space: true, special: "space" },
  { i: 32, num: 3481, title: "Créances sur cessions d'immobilisations" },
  {
    i: 33,
    num: 3482,
    title: "Créances sur cessions d'éléments d'actif circulant",
  },
  { i: 34, num: 3487, title: "Créances rattachées aux autres débiteurs" },
  { i: 35, num: 3488, title: "Divers débiteurs" },
  { i: 36, space: true, special: "space" },
  { i: 37, num: 3501, title: "Actions, partie libérée" },
  { i: 38, num: 3502, title: "Actions, partie non libérée" },
  { i: 39, num: 3504, title: "Obligations" },
  { i: 40, num: 3506, title: "Bons de caisse et bons de trésor" },
  {
    i: 41,
    num: 3508,
    title: "Autres titres et valeurs de placement similaires",
  },
  {
    i: 42,
    p: 1,

    title: "ECA-3701 Diminution des créances circulantes",
    relation: [
      3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 18, 19, 20, 21, 22, 23, 25, 26,
      27, 28, 29, 30, 32, 33, 34, 35, 37, 38, 39, 40, 41,
    ],
  },

  { i: 43, space: true, special: "space" },
  { i: 44, space: true, special: "space" },
  {
    i: 45,
    p: 1,
    title: "Contrôle",
    special: true,
    element1: 131,
    element2: 42,
  },
  { i: 46, space: true, special: "space" },
  {
    i: 47,
    p: 2,
    title: "ECA-3701 Diminution des créances circulantes",
    relation: [1],
  },
  { i: 48, space: true, special: "space" },
  {
    i: 49,
    p: 1,
    title: "ECA-3702 Augmentation des dettes circulantes",
    bs: 132,
  },
  { i: 50, space: true, special: "space" },
  { i: 51, num: 4411, title: "Fournisseurs" },
  { i: 52, num: 4413, title: "Fournisseurs - retenues de garantie" },
  { i: 53, num: 4415, title: "Fournisseurs - effets à payer" },
  { i: 54, num: 4417, title: "Fournisseurs - factures non parvenues" },
  { i: 55, num: 4418, title: "Autres fournisseurs et comptes rattachés" },
  { i: 560, space: true, special: "space" },
  {
    i: 56,
    num: 4421,
    title: "Clients - avances et acomptes reçus sur commandes en cours",
  },
  {
    i: 57,
    num: 4425,
    title: "Clients - dettes pour emballages et matériel consignés",
  },
  {
    i: 58,
    num: 4427,
    title: "Rabais, remises et ristournes à accorder - avoirs à établir",
  },
  { i: 59, num: 4428, title: "Autres clients créditeurs" },
  { i: 600, space: true, special: "space" },
  { i: 60, num: 4432, title: "Rémunérations dues au personnel" },
  { i: 61, num: 4433, title: "Dépôts du personnel créditeurs" },
  { i: 62, num: 4434, title: "Oppositions sur salaires" },
  { i: 63, num: 4437, title: "Charges du personnel à payer {provision CP}" },
  { i: 64, num: 4438, title: "Personnel - autres créditeurs" },
  { i: 5001, space: true, special: "space" },
  { i: 65, num: 4441, title: "Caisse Nationale de la Sécurité Sociale" },
  { i: 66, num: 4443, title: "Caisses de retraite" },
  { i: 67, num: 4445, title: "Mutuelles" },
  { i: 68, num: 4447, title: "Charges sociales à payer {provision CS sur CP}" },
  { i: 69, num: 4448, title: "Autres organismes sociaux" },
  { i: 350, space: true, special: "space" },
  { i: 70, num: 4452, title: "Etat Impôts, taxes et assimilés" },
  { i: 71, num: 4453, title: "Etat, impôts sur les résultats" },
  { i: 72, num: 4454, title: "Etat, IR / {salaires, dividende,…}" },
  { i: 73, num: 4455, title: "Etat, TVA facturée" },

  { i: 74, num: 4456, title: "Etat, TVA due {suivant déclarations}" },
  { i: 75, num: 4457, title: "Etat, impôts et taxes à payer" },
  { i: 76, num: 4458, title: "Etat - autres comptes créditeurs" },
  { i: 3001, space: true, special: "space" },
  { i: 77, num: 4461, title: "Associés - capital à rembourser" },
  {
    i: 78,
    num: 4462,
    title: "Associés - versements reçus sur augmentation de capital",
  },
  { i: 780, num: 4463, title: "Comptes courants des associés créditeurs" },
  { i: 79, num: 4464, title: "Associés - opérations faites en commun" },
  { i: 80, num: 4465, title: "Associés - dividendes à payer" },
  { i: 81, num: 4468, title: "Autres comptes d'associés - créditeurs" },
  { i: 5001, space: true, special: "space" },
  { i: 82, num: 4481, title: "Dettes sur acquisitions d'immobilisations" },
  {
    i: 83,
    num: 4483,
    title: "Dettes sur acquisitions de titres et valeurs de placement",
  },
  { i: 84, num: 4484, title: "Obligations échues à rembourser" },
  { i: 85, num: 4485, title: "Obligations, coupons à payer {intérêts}" },
  { i: 86, num: 4487, title: "Dettes rattachées aux autres créanciers" },
  { i: 87, num: 4488, title: "Divers créanciers" },

  {
    i: 88,
    p: 1,
    title: "ECA-3702 Augmentation des dettes circulantes",
    relation: [
      51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68,
      69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 780, 79, 80, 81, 82, 83, 84, 85,
      86, 87,
    ],
  },
  { i: 880, space: true, special: "space" },
  { i: 90, space: true, special: "space" },
  {
    i: 89,
    p: 1,
    title: "Contrôle",
    special: true,
    element1: 132,
    element2: 88,
  },
  { i: 880, space: true, special: "space" },

  {
    i: 91,
    p: 2,
    title: "ECA-3702 Augmentation des dettes circulantes",
    relation: [49],
  },
];
