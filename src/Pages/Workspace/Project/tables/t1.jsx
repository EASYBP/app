import { useDispatch, useSelector } from "react-redux";
import { checkColumn, titleColumn } from "./constante";

import SendRequest from "../../../../Services/requests";
import { notifier } from "../../../../redux/notifSlice";
import { Checkbox, FormControlLabel } from "@mui/material";
import { cellStyle, MyMaterial } from "./materialTable";
import { CheckBox } from "@mui/icons-material";
import { addRowToTable, updateTable } from "../../../../redux/projectSlice";

export const columnsT1 = [
  titleColumn(),
  checkColumn("1"),
  checkColumn("2"),
  checkColumn("3"),
  checkColumn("4"),
  {
    title: "Plan de Financement",
    field: "pf",
    width: null,
    cellStyle,
    // cellStyle: {
    //   minWidth: 100,
    //   maxWidth: 200,
    //   ...cellStyle,
    // },
    headerStyle: {
      fontSize: "10px",
    },
    align: "center",
    render: (rowData) => (
      <div className="flex justify-center w-full -translate-x-3">
        <CheckBox
          color="primary"
          style={{
            fontSize: "18px",
          }}
          className={!(rowData.pf === "X") && "hidden"}
        />
      </div>
    ),
    editComponent: (props) => {
      return (
        <FormControlLabel
          control={
            <Checkbox
              value={props.value}
              defaultValue={true}
              checked={props.value === "X" ? true : false}
              onChange={(e) => {
                props.onChange(e.target.checked ? "X" : "");
              }}
            />
          }
          // label={"BP N+" + index}
        />
      );
    },
  },
  {
    title: "Compte de Résultat",
    field: "cr",
    width: null,

    cellStyle,
    // cellStyle: {
    //   minWidth: 100,
    //   maxWidth: 200,
    //   ...cellStyle,
    // },
    headerStyle: {
      fontSize: "10px",
    },
    align: "center",
    render: (rowData) => (
      <div className="flex justify-center w-full -translate-x-3">
        <CheckBox
          color="primary"
          style={{
            fontSize: "18px",
          }}
          className={rowData.pf === "X" && "hidden"}
        />
      </div>
    ),
    editComponent: (props) => {
      console.log(props);
      return <div></div>;
    },
  },
];

const T1 = () => {
  const data = useSelector((state) => state.project.t1).map((d) =>
    Object.assign({ cr: d.pf === "X" ? "" : "X" }, d)
  );
  const pid = useSelector((state) => state.project.id);
  const dis = useDispatch();
  const addRow = (newData, resolve, reject) => {
    SendRequest({
      endpoint: "/table/t1/" + pid,
      method: "post",
      body: newData,
      success: (res) => {
        console.log(res.data);
        dis(addRowToTable({ table: "t1", data: res.data }));
        resolve();
      },
      failed: (err) => {
        dis(notifier({ message: "Impossible d'ajouter", type: "error" }));
        reject();
      },
    });
  };
  const updateRow = (oldData, newData, resolve, reject) => {
    SendRequest({
      endpoint: "/table/t1/" + pid + "/" + oldData._id,
      method: "put",
      body: newData,
      success: (res) => {
        data[data.findIndex((d) => d._id === res.data._id)] = res.data;
        dis(updateTable({ table: "t1", data: res.data }));
        resolve();
      },
      failed: (err) => {
        dis(notifier({ message: "Impossible d'ajouter", type: "error" }));
        reject();
      },
    });
  };
  const deleteRow = (oldData, resolve, reject) => {
    SendRequest({
      endpoint: "/table/t1/" + pid + "/" + oldData._id,
      method: "delete",
      success: (res) => {
        dis(setT1([...data.filter((d) => d._id !== oldData._id)]));
        resolve();
      },
      failed: (err) => {
        dis(notifier({ message: "Impossible d'ajouter", type: "error" }));
        reject();
      },
    });
  };
  return (
    <MyMaterial
      title="Sorties de Trésorerie"
      data={data.map((d) => Object.assign({}, d))}
      columns={columnsT1}
      rowStyle={(rowData) => ({
        fontSize: 12,
      })}
      editable={{
        // isEditable: (rowData) => rowData.name === "a", // only name(a) rows would be editable
        // isEditHidden: (rowData) => rowData.name === "x",
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
        onRowAdd: (newData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              /* setData([...data, newData]); */
              addRow(newData, resolve, reject);
            }, 1000);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              updateRow(oldData, newData, resolve, reject);
            }, 1000);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              deleteRow(oldData, resolve, reject);
            }, 1000);
          }),
      }}
    />
  );
};

export default T1;
