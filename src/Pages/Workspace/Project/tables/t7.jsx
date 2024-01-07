import { useDispatch, useSelector } from "react-redux";
import {} from "./constante";

import { updateTable } from "../../../../redux/projectSlice";

import SendRequest from "../../../../Services/requests";
import { notifier } from "../../../../redux/notifSlice";
import { TextField } from "@mui/material";

import { TotalPassif } from "./bp";

import { MyMaterial, cellStyle } from "./materialTable";
import { DataTable, GetValString } from "./factoring";

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

const T7 = () => {
  const data = useSelector((state) => state.project.t7).map((d) =>
    Object.assign({}, { ...d, value: parseFloat(d.value) })
  );
  const state = useSelector((state) => state.project);
  const pid = useSelector((state) => state.project.id);
  const dis = useDispatch();

  const updateRow = (oldData, newData, resolve, reject) => {
    SendRequest({
      endpoint: "/table/t6/" + pid + "/" + oldData.num,
      method: "put",
      body: { data: newData, table: "t7" },
      success: (res) => {
        data[data.findIndex((d) => d.i === newData.i)].value =
          parseFloat(newData.value.toString().replaceAll(",", ".")) || 0;
        dis(updateTable({ data: [...data], table: "t7" }));
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
      title="Bilan Passif"
      data={DataTable({ data, list: TotalPassif, state })}
      columns={columnsT6}
      portrait
      rowStyle={(rowData) => {
        return {
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
        isEditable: (rowData) => !rowData.relation, // only name(a) rows would be editable
        isEditHidden: (rowData) => rowData.relation || rowData.special,
        // isDeletable: (rowData) => rowData.name === "b", // only name(b) rows would be deletable,
        // isDeleteHidden: (rowData) => rowData.name === "y",
        // onBulkUpdate: (changes) =>
        //   new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //       /* setData([...data, newData]); */

        //       resolve();
        //     }, 1000);
        //   }),
        // onRowAddCancelled: (rowData) => console.log("Row adding cancelled"),
        // onRowUpdateCancelled: (rowData) => console.log("Row editing cancelled"),

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

export default T7;
