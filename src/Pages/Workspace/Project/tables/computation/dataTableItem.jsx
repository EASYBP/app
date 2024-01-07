import { GetValString } from "../factoring";
import compFields from "./compFields";
import { formuleT6T9T11 } from "../tv2/dataT2";

export const dataTableT14 = ({ currentList, stateList, state }) => {
  return currentList
    .map((item) => {
      const e = compFields({
        item,
        currentList,
        stateList,
        field: "e",
      });
      const d = compFields({
        item,
        currentList,
        stateList,
        field: "d",
      });

      const g = compFields({
        item: item.num
          ? {
              ...item,
              fromTableList: [
                { table: "t6", row: item.num },
                { table: "t8", row: item.num },
                { table: "t10", row: item.num, ne: true },
              ],
            }
          : item,
        currentList: currentList.map((i) => {
          if (i.num) {
            return {
              ...i,
              fromTableList: [
                { table: "t6", row: i.num },
                { table: "t8", row: i.num },
                { table: "t10", row: i.num, ne: true },
              ],
            };
          } else return i;
        }),
        stateList: state.t6,
        state: state,
        field: "value",
      });
      const f = e + d;
      return {
        ...item,
        d,
        e,
        f,
        g,
        h: g - f,
      };
    })
    .map((item) => ({
      ...item,
      title: (item.num ? item.num + " " : "") + item.title,
      e: GetValString(item.e),
      d: GetValString(item.d),
      f: GetValString(item.f),
      g: GetValString(item.g),
      h: GetValString(item.h),
    }));
};
