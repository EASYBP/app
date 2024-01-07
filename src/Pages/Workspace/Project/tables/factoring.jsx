import { totalActif } from "./bp";
import { controleT12T13, controleT6T7 } from "./controle";
import { t12_3428 } from "./specialfunctions";
import { dataT10 } from "./t10";
import { dataT11 } from "./t11";
import { dataT8 } from "./t8";
import { dataT9 } from "./t9";
import { dataTableT14 } from "./computation/dataTableItem";
import compFields from "./computation/compFields";
import { Annexe2_compField } from "./computation/annexe2_compField";

export const DisplayValue = (n) => {
  const s = n.toString();
  return s.replaceAll(".", ",");
};

export const Convert = () => {
  totalActif.elements.forEach((e1) => {
    e1.elements.forEach((e2) => {});
  });
};
export const decodeString = (s) =>
  parseFloat(
    s.toString().replaceAll(" ", "").replaceAll(",", ".").replaceAll("%", "")
  );
export const FilterTable = ({ object, list, type }) => {
  const temp = list
    .filter(
      (l) =>
        !l.p &&
        !l.relation &&
        !l.space &&
        l.num &&
        !l.fromTable &&
        !l.fromListTable
    )
    .map((item) => {
      let objectTemp;
      switch (type) {
        case 2:
          objectTemp = objType2();
          break;
        case 1: {
          objectTemp = { d: 0, e: 0 };
          break;
        }
        default:
          objectTemp = { value: 0 };

          break;
      }
      return { ...item, ...objectTemp };
    });

  return temp;
};
const objType2 = () => ({
  montant: 0,
  echeance: "",
  "01": 0,
  "02": 0,
  "03": 0,
  "04": 0,
  "05": 0,
  "06": 0,
  "07": 0,
  "08": 0,
  "09": 0,
  "010": 0,
  "011": 0,
  "012": 0,
});
export const GetValString = (n) => {
  const round = (n, dp) => {
    const h = +"1".padEnd(dp + 1, "0"); // 10 or 100 or 1000 or etc
    return Math.round(n * h) / h;
  };

  return n == null
    ? " "
    : round(n, 2)
        .toFixed(2)
        .replace(/\B(?=(\d{3})+(?!\d))/g, " ")
        .replaceAll(".", ",");
};

export const getVal = ({ item, data, list, bs }) => {
  if (!item.relation) {
    return item.bs
      ? bs.filter((b) => b.i === item.bs)[0].value
      : data.filter((d) => d.i === item.i)[0].value;
  } else
    return item.relation
      .map((e) =>
        getVal({ item: list[list.findIndex((d) => d.i === e)], data, list, bs })
      )
      .reduce((a, b) => a + b);
};

const getOneValue = ({ tab, num }) => {
  const item = tab.filter((f) => f.num === num)[0];
  return item ? item.value : 0;
};
export const getValSpecialT12 = ({ item, list, state }) => {
  const getValTemp = ({ num, t1, t2, t3 }) => {
    const item1 = state[t1].filter((f) => f.num === num)[0];
    const item2 = state[t2].filter((f) => f.num === num)[0];
    const item3 = state[t3].filter((f) => f.num === num)[0];
    const val1 = item1 ? item1.value : 0;
    const val2 = item2 ? item2.value : 0;
    const val3 = item3 ? item3.value : 0;
    return val1 + val2 - val3;
  };

  if (!item.relation) {
    switch (item.num) {
      case 2710:
        return (
          getOneValue({ tab: state.t6, num: 2710 }) -
          getVal({
            item: dataT8.filter((f) => f.i === 7)[0],
            data: state.t8,
            list: dataT8,
          })
        );
      case 2720:
        return (
          getOneValue({ tab: state.t6, num: 2720 }) -
          getVal({
            item: dataT8.filter((f) => f.i === 23)[0],
            data: state.t8,
            list: dataT8,
          })
        );
      case 3701:
        return (
          getOneValue({ tab: state.t6, num: 3701 }) -
          getVal({
            item: dataT9.filter((f) => f.i === 42)[0],
            data: state.t9,
            list: dataT9,
          })
        );
      case 3702:
        return (
          getOneValue({ tab: state.t6, num: 3702 }) -
          getVal({
            item: dataT9.filter((f) => f.i === 88)[0],
            data: state.t9,
            list: dataT9,
          })
        );
      case 3482:
      case 3487:
        return 0;
      case 3428:
        return (
          getValTemp({ num: 3428, t1: "t6", t2: "t9", t3: "t11" }) +
          getValTemp({ num: 3482, t1: "t6", t2: "t9", t3: "t11" })
        );
      case 3488:
        return (
          getValTemp({ num: 3488, t1: "t6", t2: "t9", t3: "t11" }) +
          getValTemp({ num: 3487, t1: "t6", t2: "t9", t3: "t11" })
        );
      default:
        if (item.num.toString().startsWith("2"))
          return getValTemp({ num: item.num, t1: "t6", t2: "t8", t3: "t10" });
        else
          return getValTemp({ num: item.num, t1: "t6", t2: "t9", t3: "t11" });
    }
  } else
    return item.relation
      .map((e) =>
        getValSpecialT12({
          item: list[list.findIndex((d) => d.i === e)],
          list,
          state,
        })
      )
      .reduce((a, b) => a + b);
};
export const getValSpecialT13 = ({ item, list, state }) => {
  const getValTemp = ({ num, t1, t2, t3, ne }) => {
    const item1 = state[t1].filter((f) => f.num === num)[0];
    const item2 = state[t2].filter((f) => f.num === num)[0];
    const item3 = state[t3].filter((f) => f.num === num)[0];
    const val1 = item1 ? item1.value : 0;
    const val2 = item2 ? item2.value : 0;
    const val3 = item3 ? item3.value : 0;
    return ne ? val1 - val2 + val3 : val1 + val2 - val3;
  };

  if (!item.relation) {
    switch (item.num) {
      case 1710:
        return (
          getOneValue({ tab: state.t7, num: 1710 }) -
          getVal({
            item: dataT10.filter((f) => f.i === 7)[0],
            data: state.t10,
            list: dataT8,
          })
        );
      case 1720:
        return (
          getOneValue({ tab: state.t7, num: 1720 }) -
          getVal({
            item: dataT10.filter((f) => f.i === 23)[0],
            data: state.t10,
            list: dataT10,
          })
        );
      case 4701:
        return (
          getOneValue({ tab: state.t7, num: 4701 }) -
          getVal({
            item: dataT11.filter((f) => f.i === 42)[0],
            data: state.t11,
            list: dataT11,
          })
        );
      case 4702:
        return (
          getOneValue({ tab: state.t7, num: 4702 }) -
          getVal({
            item: dataT11.filter((f) => f.i === 88)[0],
            data: state.t11,
            list: dataT11,
          })
        );
      case 4487:
        return 0;
      case 4488:
        return (
          getValTemp({ num: 4488, t1: "t7", t2: "t9", t3: "t11", ne: true }) +
          getValTemp({ num: 4487, t1: "t7", t2: "t9", t3: "t11", ne: true })
        );
      default:
        if (item.num.toString().startsWith("1"))
          return getValTemp({
            num: item.num,
            t1: "t7",
            t2: "t8",
            t3: "t10",
            ne: true,
          });
        else
          return getValTemp({
            num: item.num,
            t1: "t7",
            t2: "t9",
            t3: "t11",
            ne: true,
          });
    }
  } else
    return item.relation
      .map((e) =>
        getValSpecialT13({
          item: list[list.findIndex((d) => d.i === e)],
          list,
          state,
        })
      )
      .reduce((a, b) => a + b);
};
export const DataTable = ({
  data,
  list,
  bs,
  specialFunction,
  hideNum,
  special,
  state,
  type,
  currentList,
  stateList,
  sectionTitleSum,
  customTotal
}) => {
  const returnedList = [];
  switch (type) {
    case "A2":
      return Annexe2_compField({ state, stateList,sectionTitleSum,customTotal });
    case "t_v2":
      for (let item of currentList) {
        const obj = {
          ...item,
          echeance: compFields({
            item,
            currentList,
            state,
            stateList,
            field: "echeance",
            fromTableList: item.fromTableList,
          }),
          title: item.space ? "" : `${item.title}`,
          montant: GetValString(
            compFields({
              item,
              currentList,
              state,
              fromLocal: item.fromLocal,
              returnedList,
              stateList,
              field: "montant",
              fromTableList: item.fromTableList,
            })
          ),
        };
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
          obj[i] = GetValString(
            compFields({
              item,
              currentList,
              state,

              stateList,
              field: i,
            })
          );
        }
        returnedList.push(obj);
      }
      return returnedList;
    case "t14":
      return dataTableT14({ currentList, stateList, state });
    case "v2":
      for (let item of currentList) {
        const tit = item.num ? (hideNum ? "" : item.num + " ") : "";
        const obj = {
          ...item,
          title: item.space ? "" : `${tit}${item.title}`,
          value: GetValString(
            compFields({
              item,
              currentList,
              state,
              returnedList,
              stateList,
              field: "value",
            })
          ),
        };
        returnedList.push(obj);
      }

      return returnedList;
    default:
      return list.map((d) => ({
        ...d,
        title: d.space ? "" : `${d.num ? d.num + " " : ""}${d.title}`,
        value: swithVal({
          d: specialToData({ special, d }),
          data,
          list,
          bs,
          specialFunction,
          special,
          state,
        }),
      }));
  }
};
const specialToData = ({ special, d }) => {
  if (special) {
    const filter = special.filter((f) => f.num === d.num);
    if (filter[0]) {
      return { ...d, special: filter[0].special };
    } else return d;
  } else return d;
};
const swithVal = ({
  d,
  data,
  list,
  bs,
  specialFunction,

  state,
  special,
}) => {
  switch (d.special) {
    case "space":
      return "";
    case "round":
      return GetValString(Math.round(getVal({ item: d, list, bs, data })));
    case true:
      return GetValString(specialFunction(d.element1, d.element2));
    case "controle t6-t7":
      return GetValString(controleT6T7({ state }));
    case "controle t12-t13":
      return GetValString(controleT12T13({ state }));
    case "t12":
      return GetValString(getValSpecialT12({ item: d, list, state }));
    case "t13":
      return GetValString(getValSpecialT13({ item: d, list, state }));
    default:
      return GetValString(getVal({ item: d, list, bs, data }));
  }
};
