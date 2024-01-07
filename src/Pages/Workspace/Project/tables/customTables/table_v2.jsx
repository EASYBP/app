import { DataTable } from "../factoring";
import { useEffect, useRef, useState } from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import {
  CloseOutlined,
  CloseRounded,
  CloseTwoTone,
  Edit,
} from "@mui/icons-material";
import { TextField, Tooltip } from "@mui/material";
import { Check, Close, ExitToApp, SaveAlt } from "@material-ui/icons";
import { updateTableV2 } from "../../../../../redux/projectSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { SendRequestThunk } from "../../../../../Services/requests";
import { exportExcel, exportPdf } from "../materialTable";
import { notifier } from "../../../../../redux/notifSlice";

const moisList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const Table_v2 = ({
  title = "",
  hd = ["3421 Clients"],
  currentList,
  table,
}) => {
  //  const dataState = useSelector((state) => state.project[table]).map((d) =>
  //    Object.assign({}, { ...d })
  //  );
  const state = useSelector((state) => state.project);
  const data = DataTable({
    currentList,
    state,
    stateList: state[table],
    type: "t_v2",
  });
  const dis = useDispatch();
  return (
    <div className="flex flex-col justify-center w-[100vw] transition-all">
      {data && (
        <>
          <div className="w-full items-center flex flex-row justify-between py-2">
            <div className="max-w-2/3">{""}</div>
            <div className="flex flex-row gap-3">
              <Button
                size="small"
                className="text-[#3f50b5]"
                variant="text"
                color="primary"
                onClick={() => {
                  const columns = [
                    {
                      title: hd,
                      field: "title",
                    },
                    {
                      title: "Montant Total",
                      field: "montant",
                    },
                    {
                      title: "Échéance",
                      field: "echeance",
                    },
                    ...moisList.map((m) => ({
                      title: `0${m}-N+1`,
                      field: `0${m}`,
                    })),
                  ];

                  exportExcel({
                    dis,
                    title: title == "" ? "table" : title,
                    columns,
                    data,
                  });
                }}
                startIcon={<SaveAlt className="-translate-y-[2px]" />}
              >
                EXCEL
              </Button>
              <Button
                size="small"
                className="text-[#3f50b5]"
                variant="text"
                color="primary"
                onClick={() => {
                  const columns = [
                    {
                      title: hd,
                      field: "title",
                    },
                    {
                      title: "Montant Total",
                      field: "montant",
                    },
                    {
                      title: "Échéance",
                      field: "echeance",
                    },
                    ...moisList.map((m) => ({
                      title: `0${m}-N+1`,
                      field: `0${m}`,
                    })),
                  ];

                  exportPdf({
                    dis,
                    title: title == "" ? "table" : title,
                    columns,
                    data,
                  });
                }}
                startIcon={<SaveAlt className="-translate-y-[2px]" />}
              >
                PDF
              </Button>
            </div>
          </div>
          <div className="w-full mx-auto overflow-scroll pb-5 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-white">
            <table class=" w-[2000px] text-left ">
              <thead class="bg-[#31859b] text-white py-2 px-1 relative text-base">
                <tr>
                  <th colSpan={4} scope="col" className="w-[100px] text-center">
                    {title}
                  </th>

                  <th
                    colSpan={12}
                    scope="col"
                    className="w-[200px] text-center"
                  >
                    Etaler les montants sur les différents mois
                  </th>
                </tr>
                <tr>
                  <th scope="col" className="w-[100px] text-center">
                    Actions
                  </th>
                  <th scope="col" className="w-[400px] pl-2">
                    {hd.map((h) => (
                      <p>{h}</p>
                    ))}
                  </th>
                  <th scope="col" className="w-[150px] text-center">
                    Montant Total
                  </th>
                  <th scope="col" className="w-[200px] text-center">
                    Échéance
                  </th>

                  {moisList.map((n) => (
                    <th key={n} scope="col" className="w-[100px] text-center">
                      0{n}-N+1
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((item, i) => (
                  <RowTable_v2
                    key={i}
                    item={item}
                    table={table}
                    idProject={state.id}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};
export default Table_v2;

const RowTable_v2 = ({ item, table, idProject }) => {
  const dis = useDispatch();
  const updateRow = (newData, resolve, reject) => {
    SendRequestThunk({
      endpoint: "/table/t_v2/" + idProject + "/" + newData.num,
      method: "put",
      body: { data: newData, table },
      success: (res) => {
        dis(updateTableV2({ newData, table }));
        resolve();
      },
      failed: (err) => {
        dis(notifier({ message: "Erreur de modification", type: "error" }));
        reject();
      },
    });
  };
  const bgColor =
    item.type === 1
      ? "bg-[#fde9d9]"
      : item.type === 2
      ? "bg-[#99ff65]"
      : item.type === 4
      ? "bg-[#31859b]"
      : item.type === 3 && "bg-[#7f7f7f]";
  const textColor = item.type === 4 ? "text-white" : "text-black";
  const editable =
    !item.fromTableList && !item.space && !item.relation && !item.fromLocal;
  const [edit, setedit] = useState(false);
  const handleValidate = () => {
    updateRow(updateItem, () => setedit(false));
  };
  const [updateItem, setupdateItem] = useState(item);

  return (
    <tr
      className={`border-b-[1px] border-black ${bgColor} ${textColor} relative`}
    >
      <th className="mx-auto text-center">
        {editable &&
          (edit ? (
            <div className="flex flex-row justify-around font-extrabold">
              <Tooltip title="annuler">
                <button onClick={() => setedit(false)}>
                  <CloseOutlined className="text-red-500" />
                </button>
              </Tooltip>
              <Tooltip title="valider">
                <button onClick={handleValidate}>
                  <Check className="text-purple-600" />
                </button>
              </Tooltip>
            </div>
          ) : (
            <Tooltip title="modifier">
              <button onClick={() => setedit(true)}>
                <Edit className="text-sm" />
              </button>
            </Tooltip>
          ))}
      </th>

      <th className={item.title ? "" : "h-[20px]"}>{item.title}</th>
      {edit ? (
        <th>
          <MyInputUpdate
            value={updateItem.montant}
            onChange={(e) =>
              setupdateItem((old) => ({ ...old, montant: e.target.value }))
            }
          />
        </th>
      ) : (
        <th className="text-right">{item.montant}</th>
      )}
      {edit ? (
        <th>
          <MyInputUpdate
            value={updateItem.echeance}
            multiline={true}
            maxRows={3}
            textAlign="left"
            onChange={(e) =>
              setupdateItem((old) => ({ ...old, echeance: e.target.value }))
            }
          />
        </th>
      ) : (
        <th className="">{item.echeance}</th>
      )}
      {moisList.map((n) =>
        edit ? (
          <th className="">
            <MyInputUpdate
              value={updateItem["0" + n.toString()]}
              onChange={(e) => {
                const obj = {};
                obj["0" + n.toString()] = e.target.value;
                // console.log(updateItem);
                setupdateItem((old) => Object.assign({ ...old }, obj));
              }}
            />
          </th>
        ) : (
          <th key={n} className="text-right">
            {item["0" + n.toString()]}
          </th>
        )
      )}
    </tr>
  );
};

const MyInputUpdate = ({
  value,
  onChange,
  textAlign = "right",
  multiline,
  maxRows,
}) => {
  return (
    <TextField
      value={value}
      onChange={onChange}
      multiline={multiline}
      maxRows={maxRows}
      fullWidth
      size="small"
      className="bg-white py-0 text-sm my-[10px]"
      sx={{
        input: {
          textAlign,
          fontSize: 14,
          padding: "5px 2px",
        },
        "& legend": { display: "none" },
        "& fieldset": { top: 0 },
      }}
    />
  );
};
