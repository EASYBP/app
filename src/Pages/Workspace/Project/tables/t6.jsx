import { useDispatch, useSelector } from "react-redux";
import {} from "./constante";

import SendRequest from "../../../../Services/requests";
import { notifier } from "../../../../redux/notifSlice";
import { TextField } from "@mui/material";

import { TotalActif } from "./bp";

import { MyMaterial, cellStyle } from "./materialTable";
import { GetValString } from "./factoring";
import { updateTable } from "../../../../redux/projectSlice";

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

const T6 = () => {
  const data = useSelector((state) => state.project.t6).map((d) =>
    Object.assign({}, { ...d, value: parseFloat(d.value) })
  );
  const pid = useSelector((state) => state.project.id);
  const dis = useDispatch();

  const updateRow = (oldData, newData, resolve, reject) => {
    console.log(newData.value);
    if (specialMoins.includes(newData.i) && newData.value > 0)
      newData.value = newData.value * -1;
    SendRequest({
      endpoint: "/table/t6/" + pid + "/" + oldData.num,
      method: "put",
      body: { data: newData, table: "t6" },
      success: (res) => {
        data[data.findIndex((d) => d.i === newData.i)].value =
          parseFloat(newData.value.toString().replaceAll(",", ".")) || 0;
        dis(updateTable({ table: "t6", data }));
        resolve();
      },
      failed: (err) => {
        dis(notifier({ message: "Erreur de modification", type: "error" }));
        reject();
      },
    });
  };
  const dataVal = (item) => {
    const t = data.filter((d) => d.i === item.i);

    return t[0]?.value;
  };

  const getVal = (item) => {
    //if (item.end) return data.map((d) => d.value).reduce((a, b) => a + b);
    if (!item.relation) return dataVal(item);
    else
      return item.relation
        .map((e) => getVal(TotalActif[TotalActif.findIndex((d) => d.i === e)]))
        .reduce((a, b) => a + b);
  };

  return (
    <MyMaterial
      title="Bilan Actif"
      portrait
      data={TotalActif.map((d) => ({
        ...d,
        title: `${d.num ? d.num + " " : ""}${d.title}`,
        value: GetValString(getVal(d)),
      }))}
      columns={columnsT6}
      rowStyle={(rowData) => {
        return {
          padding: "0px",
          margin: "0px",
          fontSize: rowData.relation ? 13 : 12,
          fontWeight: rowData.relation && "bolder",
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

export default T6;

const specialMoins = [
  5, 6, 7, 15, 16, 17, 18, 18, 0, 29, 30, 31, 32, 33, 34, 35, 43, 44, 45, 46,
];
