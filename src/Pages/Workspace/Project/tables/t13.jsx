import { useSelector } from "react-redux";

import { TextField } from "@mui/material";

import { TotalActif, TotalPassif } from "./bp";

import { MyMaterial, cellStyle } from "./materialTable";
import { DataTable } from "./factoring";
import { getColorCell } from "./specialfunctions";

export const columnsT6 = [
  {
    title: "HD",

    field: "title",
    cellStyle,
    render: (rowData) =>
      rowData.space ? <div className="h-[20px]"></div> : <p>{rowData.title}</p>,
    editComponent: (props) => {
      return (
        <TextField
          fullWidth
          inputProps={{ readOnly: true }}
          variant="outlined"
          value={props.value}
        />
      );
    },
  },
  {
    title: "Valeurs",
    field: "value",
    align: "right",
    cellStyle,
    render: (rowData) =>
      rowData.space ? <div className="h-[20px]"></div> : <p>{rowData.value}</p>,
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
];

const T13 = () => {
  const data = useSelector((state) => state.project.t6).map((d) =>
    Object.assign({}, { ...d, value: parseFloat(d.value) })
  );
  const state = useSelector((state) => state.project);

  return (
    <MyMaterial
      title="Bilan Actif"
      portrait
      data={DataTable({
        data,
        state,
        list: TotalPassif.map((t) => ({
          ...t,
          special: t.special
            ? t.special === "controle t6-t7"
              ? "controle t12-t13"
              : t.special
            : "t13",
        })),
      })}
      columns={columnsT6}
      rowStyle={(rowData) => {
        return {
          padding: "0px",
          margin: "0px",
          fontSize: rowData.p ? 13 : 12,
          fontWeight: rowData.p && "bolder",
          color: rowData?.p === 2 ? "white" : rowData?.p === 3 && "yellow",
          backgroundColor: getColorCell(rowData),
        };
      }}
    />
  );
};

export default T13;
