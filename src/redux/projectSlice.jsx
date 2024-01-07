import { createSlice } from "@reduxjs/toolkit";
import { TotalActif, TotalPassif } from "../Pages/Workspace/Project/tables/bp";
import { FilterTable } from "../Pages/Workspace/Project/tables/factoring";
import { dataT10 } from "../Pages/Workspace/Project/tables/t10";
import { dataT11 } from "../Pages/Workspace/Project/tables/t11";
import { dataT8 } from "../Pages/Workspace/Project/tables/t8";
import { dataT9 } from "../Pages/Workspace/Project/tables/t9";
import { datat14 } from "../Pages/Workspace/Project/tables/t14";
import { dataT15 } from "../Pages/Workspace/Project/tables/t15";

import dataTV2 from "../Pages/Workspace/Project/tables/tv2/dataT2";
import dataA2 from "../Pages/Workspace/Project/tables/annexe 2/dataA2";
import dataA2S from "../Pages/Workspace/Project/tables/annexe 2/dataA2S";
import { dataT16 } from "../Pages/Workspace/Project/tables/t16";
import { dataT17 } from "../Pages/Workspace/Project/tables/t17";
const initialState = {
  id: null,
  t1: [],
  t2: [],
  t5: [],
  t6: FilterTable({ list: TotalActif }),
  t7: FilterTable({ list: TotalPassif }),
  t8: FilterTable({ list: dataT8 }),
  t9: FilterTable({ list: dataT9 }),
  t10: FilterTable({ list: dataT10 }),
  t11: FilterTable({ list: dataT11 }),
  t14: FilterTable({ list: datat14, type: 1 }),
  t15: FilterTable({ list: dataT15 }),
  ////
  ...Object.keys(dataTV2)
    .map((d, i) => {
      const obj = {};
      obj[`t2_${i + 1}`] = FilterTable({
        list: dataTV2[d],
        type: 2,
      });
      return obj;
    })
    .reduce((a, b) => Object.assign(a, b)),
  ////
  t16: FilterTable({ list: dataT16 }),
  t17: FilterTable({ list: dataT17 }),

  /////
  ...Object.keys(dataA2)
    .map((d, i) => {
      const obj = {};
      obj[`a${i + 1}`] = dataA2[d];

      return obj;
    })
    .reduce((a, b) => Object.assign(a, b)),
  aS1: dataA2S.dataA2S1,
};

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    initProject: (state, action) => {
      state.id = action.payload._id;
      state.t1 = action.payload.t1;
      state.t2 = action.payload.t2;
      state.t5 = action.payload.t5;
      state.t6 = getVal(state.t6, action.payload.t6);
      state.t7 = getVal(state.t7, action.payload.t7);
      state.t8 = getVal(state.t8, action.payload.t8);
      state.t9 = getVal(state.t9, action.payload.t9);
      state.t10 = getVal(state.t10, action.payload.t10);
      state.t11 = getVal(state.t11, action.payload.t11);
      state.t14 = getVal(state.t14, action.payload.t14, "t14");
      state.t15 = getVal(state.t15, action.payload.t15);

      for (let i = 1; i < Object.keys(dataTV2).length + 1; i++) {
        state[`t2_${i}`] = getVal(
          state[`t2_${i}`],
          action.payload[`t2_${i}`],
          "2"
        );
      }
      console.log(state);
      state.t16 = getVal(state.t16, action.payload.t16);
      state.t17 = getVal(state.t17, action.payload.t17);

      for (let i = 1; i < Object.keys(dataA2).length + 1; i++) {
        state[`a${i}`] = getVal(
          state[`a${i}`],
          action.payload[`a${i}`],
          "annexe2"
        );
      }
      state.aS1 = getVal(state.aS1, action.payload.aS1, "aS1");

    },

    addRowToTable: (state, action) => {
      state[action.payload.table] = [
        ...state[action.payload.table],
        action.payload.data,
      ];
    },
    updateTable: (state, action) => {
      state[action.payload.table] = action.payload.data;
    },
    updateTableInside: (state, action) => {
      state[action.payload.table][
        state[action.payload.table].findIndex(
          (d) => d.i === action.payload.newData.i
        )
      ].value = action.payload.newData.value;
    },
    updateTableInsideNum: (state, action) => {
      state[action.payload.table][
        state[action.payload.table].findIndex(
          (d) => d.num === action.payload.newData.num
        )
      ] = action.payload.newData;
    },
    updateTableWithItem: (state, action) => {
      state[action.payload.table][
        state[action.payload.table].findIndex(
          (d) => d.i === action.payload.item.i
        )
      ] = action.payload.item;
    },
    updateTableV2: (state, action) => {
      const obj = {};
      const newData = action.payload.newData;
      const l = [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "010",
        "011",
        "012",
      ];
      for (let i of l) {
        obj[i] = parseFloat(newData[i].toString().replaceAll(" ", "").replaceAll(",", ".")) || 0;
      }

      state[action.payload.table][
        state[action.payload.table].findIndex(
          (d) => d.i === action.payload.newData.i
        )
      ] = {
        ...newData,
        montant:
          parseFloat(newData.montant.toString().replaceAll(" ", "").replaceAll(",", ".")) || 0,
        ...obj,
      };
    },
    updateAnnexe2: (state, action) => {
      const { isSection, field, isCompte, compte, annee, mois, fullData } =
        action.payload.property;
      const section = action.payload.property.section || fullData._id;

      // const conditionSection = state[table].filter(
      //   (s) => s.id == parseInt(section) || s._id == section
      // )[0];
      const table = action.payload.table;
      console.log("All properties: ", action.payload.property);
      const secId = state[table].findIndex(
        (s) => s.id == parseInt(section) || s._id == section
      );
      if (isSection) {
        state[table][secId].title = action.payload.response.title;
      } else {
        //  if (field !== "ht" && field !== "tva" && field !== "ttc") {
        const id = state[table][secId].comptes.findIndex(
          (i) => i.num == compte
        );
        const id2 = action.payload.response.comptes.findIndex(
          (i) => i.num == compte
        );
        if (field !== "ht" && field !== "tva" && field !== "ttc") {
          state[table][secId].comptes[id][field] = action.payload.value;
        } else {
          state[table][secId].comptes[id].annee[annee][mois][field] =
            action.payload.value;
        }

        // } else {
        //   const id = state[table][section].comptes.findIndex(
        //     (i) => i.id == compte
        //   );
        //   state[table][section].comptes[id].annee[annee][mois][field] =
        //     action.payload.value;
        // }
      }
    },
    updateAnnexe2Add: (state, action) => {
      const { type, table, section, response } = action.payload;
      switch (action.payload.type) {
        case "line":
          const secId = state[table].findIndex(
            (s) => s.id == section.id || (s._id && s._id == section._id)
          );

          state[table][secId].comptes.push(response);
          break;
        case "section":
          state[table].push(response);

          break;
        default:
          break;
      }
    },
    updateAnnexe2Delete: (state, action) => {
      const { type, table, section, response } = action.payload;
      switch (type) {
        case "line":
          const secId = state[table].findIndex(
            (s) => s.id == section.id || (s._id && s._id == section._id)
          );
          const id = state[table][secId].comptes.findIndex(
            (i) => i.num == response.num
          );
          state[table][secId].comptes.splice(id, 1);
          break;
        case "section":
          //remove section from state
          state[table] = state[table].filter((s) => s._id != response);
        default:
          break;
      }
    },
    addAnnexe2_s: (state, action) => {
      const { newData } = action.payload
  
    state.aS1=newData
  
     
    }


  },
});


const getVal = (list, table, variation) => {
  if (table) {
    switch (variation) {
      case "aS1":
        if (table.length !== 0) {
          console.log('table', table)
          list = table
        }
        break
      case "t14":
        for (let index = 0; index < table.length; index++) {
          list[list.findIndex((l) => l.num === table[index].num)].e =
            table[index].e;
          list[list.findIndex((l) => l.num === table[index].num)].d =
            table[index].d;
        }
        break;
      case "2":
        const keys = [
          "montant",
          "echeance",
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "010",
          "011",
          "012",
        ];
        for (let index = 0; index < table.length; index++) {
          for (let i = 0; i < keys.length; i++) {
            list[list.findIndex((l) => l.i === table[index].i)][keys[i]] =
              table[index][keys[i]];
          }
        }
        break;
      case "annexe2":
        for (let index = 0; index < list.length; index++) {
          const section = table.filter((t) => t.id == list[index].id)[0];
          if (section) {
            list[index] = section;
          }
        }
        const listId = list.map((l) => l.id);

        for (let index = 0; index < table.length; index++) {
          if (!list.includes(table[index])) {
            list.push(table[index]);
          }
        }

        break;
      default:
        for (let index = 0; index < table.length; index++) {
          list[list.findIndex((l) => l.num === table[index].num)].value =
            table[index].value;
        }
        break;
    }
  }
  return list;
};
// Action creators are generated for each case reducer function
export const {
  initProject,
  addRowToTable,
  updateTable,
  updateTableWithItem,
  updateTableInside,
  updateTableInsideNum,
  updateTableV2,
  updateAnnexe2,
  updateAnnexe2Add,
  updateAnnexe2Delete,
  addAnnexe2_s
} = projectSlice.actions;

export default projectSlice.reducer;
