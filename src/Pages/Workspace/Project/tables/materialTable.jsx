import { CircularProgress, Paper } from "@mui/material";
import MaterialTable from "material-table";
import { localisation, tableIcons } from "./constante";
import { useWaiting } from "./hooks";
import * as XLSX from "xlsx/xlsx.mjs";
import { useDispatch } from "react-redux";
import { loading, notLoading } from "../../../../redux/notifLoadingSlice";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

//test
export const cellStyle = () => ({
  padding: "2px 10px 2px 10px",
});
export const exportPdf = ({ columns, data, title, dis, portrait }) => {
  console.log(columns);
  console.log(data);
  dis(loading("Export en format pdf encours..."));
  let newData = [];
  for (let index = 0; index < data.length; index++) {
    let temp = [];
    for (let j = 0; j < columns.length; j++) {
      temp.push(data[index][columns[j].field]);
    }
    newData.push(temp);
  }
  const headers = columns.map((c) => c.title);
  const doc = new jsPDF(portrait ? "p" : "l");
  autoTable(doc, {
    head: [headers],
    body: newData,
  });
  doc.save(title + ".pdf");
  setTimeout(() => {
    dis(notLoading());
  }, 1400);
};

export const exportExcel = ({ columns, data, title, dis }) => {
  dis(loading("Export en format excel encours..."));
  let newData = [];
  for (let index = 0; index < data.length; index++) {
    let temp = {};
    for (let j = 0; j < columns.length; j++) {
      temp[columns[j].title] = data[index][columns[j].field];
    }
    newData.push(temp);
  }
  console.log(newData);
  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.json_to_sheet(newData);
  XLSX.utils.book_append_sheet(wb, ws, "sheet");
  XLSX.writeFileXLSX(wb, title + ".xlsx");
  setTimeout(() => {
    dis(notLoading());
  }, 1000);
};

export const MyMaterial = ({
  title,
  columns,
  data,
  paging,
  editable,
  rowStyle,
  maxWidth,
  portrait,
  components,
  headerExpand,
  fixedColumns,
  widthSize,
  style
}) => {
  const { isLoading } = useWaiting();
  const dis = useDispatch();

  return (
    <div>
      {isLoading ? (
        <div className="h-[80vh] w-[screen] flex justify-center items-center">
          <CircularProgress size={50} />
        </div>
      ) : (
        <div className="flex justify-center w-full">
          <div className={`w-full ${!maxWidth && "max-w-3xl"}`}>
            <MaterialTable
              icons={tableIcons}
              components={{
                Container: (props) => <div {...props} className={widthSize}/>,
                ...components,
              }}
              style={style}
              title={title}
              data={data}
              columns={columns}
              options={{
                tableLayout: "auto",
                search: true,
                paging: paging || false,
                exportButton: true,

                exportPdf: (columns, data) => {
                  exportPdf({ columns, data, title, dis, portrait });
                },
                exportCsv: (columns, data) => {
                  exportExcel({ columns, data, title, dis });
                },

                headerStyle: {
                  backgroundColor: "#0171c0",
                  color: "#FFF",
                  fontWeight: "bold",
                  padding: "3px 5px",
                  whiteSpace: headerExpand && "nowrap",
                },
                rowStyle,
              }}
              localization={localisation}
              editable={editable}
            />
          </div>
        </div>
      )}
    </div>
  );
};
