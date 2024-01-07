import { useSelector } from "react-redux";

import { TextField } from "@mui/material";

import { TotalActif } from "./bp";

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

const T12 = () => {
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
        list: TotalActif.map((t) => ({
          ...t,
          special: t.special ? t.special : "t12",
        })),
      })}
      columns={columnsT6}
      rowStyle={(rowData) => {
        return {
          padding: "0px",
          margin: "0px",
          fontSize: rowData.relation ? 13 : 12,
          fontWeight: rowData.relation && "bolder",
          color: rowData?.p === 2 ? "white" : rowData?.p === 3 && "yellow",
          backgroundColor: getColorCell(rowData),
        };
      }}
    />
  );
};

export default T12;
