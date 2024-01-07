import { LIST_ANNEE, LIST_MOIS } from "../customTables/table_v3";
import { dataA2 } from "../annexe 2/dataA2";
import { GetValString } from "../factoring";

export const Annexe2_compField = ({ state, currentList, stateList,sectionTitleSum,customTotal }) => {
  console.log('stateList', stateList)
  const l = JSON.parse(JSON.stringify(stateList));
  for (let s = 0; s < l.length; s++) {
    const section = l[s];
    const comptes = section.comptes;
    const compte = () => ({
      total: true,
      title:sectionTitleSum ||customTotal?`Total ${section.title}` :"Total Chiffres d'affaires",
      commentaire: "",
      taux: "",
      annee: LIST_ANNEE.map((a, ai) => {
        return [
          ...LIST_MOIS.map((m, mi) => {
            return {
              ht: getSum({ list: comptes, a: ai, m: mi, type: "ht" }),
              tva: getSum({ list: comptes, a: ai, m: mi, type: "tva" }),
              ttc: getSum({ list: comptes, a: ai, m: mi, type: "ttc" }),
            };
          }),
        ];
      }),
    });
    l[s].comptes = [
      compte(),
      ...l[s].comptes.map((c) => {
        return {
          ...c,
          taux: GetValString(c.taux) + "%",
          annee: c.annee.map((a) => {
            return a.map((m) => {
              const tva = (m.ht * c.taux) / 100;
              return {
                ht: GetValString(m.ht),
                tva: GetValString(tva),
                ttc: GetValString(m.ht + tva),
              };
            });
          }),
        };
      }),
      compte(),
    ];
  }
  return l;
};

const getSum = ({ list, a, m, type }) =>{

  const listTemp=list
  .filter((cf) => !cf.total)
  .map((cm) => {
    switch (type) {
      case "ht":
        return cm.annee[a][m].ht;
      case "tva":
        return (cm.annee[a][m].ht * cm.taux) / 100;
      case "ttc":
        return cm.annee[a][m].ht + (cm.annee[a][m].ht * cm.taux) / 100;
    }
  })
  return GetValString(listTemp.length==0?0.0:listTemp
    
      .reduce((a, b) => a + b)
  );
    }