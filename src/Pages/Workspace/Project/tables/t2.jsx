import { useDispatch, useSelector } from "react-redux";

import SendRequest from "../../../../Services/requests";
import { notifier } from "../../../../redux/notifSlice";

import { columnsT1 } from "./t1";

import { MyMaterial } from "./materialTable";
import { addRowToTable, updateTable } from "../../../../redux/projectSlice";

const T2 = () => {
  const data = useSelector((state) => state.project.t2).map((d) =>
    Object.assign({ cr: d.pf === "X" ? "" : "X" }, d)
  );
  const pid = useSelector((state) => state.project.id);
  const dis = useDispatch();
  const addRow = (newData, resolve, reject) => {
    SendRequest({
      endpoint: "/table/t2/" + pid,
      method: "post",
      body: newData,
      success: (res) => {
        dis(addRowToTable({ table: "t2", data: res.data }));
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
      endpoint: "/table/t2/" + pid + "/" + oldData._id,
      method: "put",
      body: newData,
      success: (res) => {
        data[data.findIndex((d) => d._id === res.data._id)] = res.data;
        dis(updateTable({ table: "t2", data }));
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
      endpoint: "/table/t2/" + pid + "/" + oldData._id,
      method: "delete",
      success: (res) => {
        dis(
          updateTable({
            data: [...data.filter((d) => d._id !== oldData._id)],
            table: "t2",
          })
        );
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
      title="Entrées de Trésorerie"
      data={data.map((d) => Object.assign({}, d))}
      columns={columnsT1}
      rowStyle={(rowData) => ({
        fontSize: 12,
      })}
      editable={{
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

export default T2;
