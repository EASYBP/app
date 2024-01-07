import Table_v2 from "../customTables/table_v2";
import dt2 from "./dataT2";

const T2_1 = () => {
  return (
    <div>
      <Table_v2
        key={1}
        table={"t2_1"}
        currentList={dt2.dataTV2_1}
        title="Apurement des créances clients et des clients créditeurs issus du Bilan d'ouverture"
      />
      <Table_v2
        table={"t2_2"}
        key={2}
        hd={[
          "Autres créances clients (FAE incluses)",
          "3423 Clients - retenues de garantie",
          "3424 Clients douteux ou litigieux",
          "3425 Clients - effets à recevoir",
          "3427 Clients - factures à établir et créances sur travaux non encore facturés",
          "3428 Autres clients et comptes rattachés",
        ]}
        currentList={dt2.dataTV2_2}
      />
      <Table_v2
        key={3}
        table={"t2_3"}
        hd={["442 Clients créditeurs, avances et acomptes (AAR inclus)"]}
        currentList={dt2.dataTV2_3}
      />
    </div>
  );
};
export default T2_1;

// const cell = {
//   padding: "2px 10px 2px 10px",
//   with: 150,
//   fontSize: "10px",
//   fontWeight: "bold",
// };
// export const columnsT16 = [
//   {
//     title: "HD",
//     field: "title",
//     cellStyle: {
//       padding: "2px 10px 2px 10px",
//       with: 300,
//       whiteSpace: "nowrap",
//     },
//     editComponent: (props) => {
//       return (
//         <TextField
//           className="px-[2px] py-2 "
//           size="small"
//           fullWidth
//           inputProps={{ readOnly: true }}
//           variant="outlined"
//           value={props.value}
//           disabled
//         />
//       );
//     },
//   },
//   {
//     title: "Montant total",
//     field: "montant",
//     align: "right",
//     cellStyle: {
//       padding: "2px 10px 2px 10px",
//       whiteSpace: "nowrap",
//       fontSize: "10px",
//       with: 150,
//       fontWeight: "bold",
//     },
//     editComponent: (props) => {
//       return (
//         <div className="flex justify-end">
//           <TextField
//             variant="outlined"
//             size="small"
//             sx={{ input: { textAlign: "right" } }}
//             value={props.value.toString().replaceAll(" ", "")}
//             onChange={(e) => props.onChange(e.target.value)}
//           />
//         </div>
//       );
//     },
//   },
//   {
//     title: "Échéance",
//     field: "echeance",
//     align: "left",
//     cellStyle: {
//       padding: "2px 10px 2px 10px",

//       with: 150,
//     },

//     editComponent: (props) => {
//       return (
//         <div className="flex justify-end">
//           <TextField
//             variant="outlined"
//             size="small"
//             value={props.value}
//             onChange={(e) => props.onChange(e.target.value)}
//           />
//         </div>
//       );
//     },
//   },
//   ...[
//     "01",
//     "02",
//     "03",
//     "04",
//     "05",
//     "06",
//     "07",
//     "08",
//     "09",
//     "010",
//     "011",
//     "012",
//   ].map((e) => ({
//     title: e + "-N+1",
//     field: e,
//     align: "right",
//     cellStyle: cell,
//     editComponent: (props) => {
//       return (
//         <div>
//           <TextField
//             variant="outlined"
//             size="small"
//             sx={{ input: { textAlign: "right" } }}
//             value={props.value.toString().replaceAll(" ", "")}
//             onChange={(e) => props.onChange(e.target.value)}
//           />
//         </div>
//       );
//     },
//   })),
// ];
// const T16 = () => {
//   const loc = useLocation();
//   console.log();
//   const [value, setValue] = useState(loc.pathname.split("/")[4] ?? "1");
//   const nav = useNavigate();
//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//     /// nav(`${newValue}`);
//   };

//   return (
//     <div>
//       <Tv2
//         dataTable={dataT16}
//         table="t16"
//         timer={0}
//         headerCompte={
//           " Apurement des créances clients et des clients créditeurs issus"
//         }
//       />
//       <br />

//       {/* <Tv2
//         dataTable={dataT16}
//         table="t16"
//         timer={1000}
//         headerCompte={
//           " Apurement des créances clients et des clients créditeurs issus"
//         }
//       />

//       <br />

//       <Tv2
//         dataTable={dataT16}
//         table="t16"
//         timer={2000}
//         headerCompte={
//           " Apurement des créances clients et des clients créditeurs issus"
//         }
//       /> */}
//     </div>
//   );
// };

// const Tv2 = ({ table, dataTable, headerCompte, timer }) => {
//   const data = useSelector((state) => state.project[table]).map((d) =>
//     Object.assign({}, { ...d })
//   );
//   const state = useSelector((state) => state.project);
//   const pid = useSelector((state) => state.project.id);
//   const dis = useDispatch();
//   const updateRow = (oldData, newData, resolve, reject) => {
//     SendRequest({
//       endpoint: "/table/t_v2/" + pid + "/" + oldData.num,
//       method: "put",
//       body: { data: newData, table },
//       success: (res) => {
//         dis(updateTableV2({ newData, table }));
//         resolve();
//       },
//       failed: (err) => {
//         dis(notifier({ message: "Erreur de modification", type: "error" }));
//         reject();
//       },
//     });
//   };
//   const [display, setdisplay] = useState(false);
//   useEffect(() => {
//     setTimeout(() => {
//       setdisplay(true);
//     }, timer);
//   }, []);
//   return (
//     <div>
//       {display && (
//         <MyMaterial
//           title="Répartition des Matières et fournitures consommables issues du Bilan d'ouverture"
//           data={DataTable({
//             currentList: dataTable,
//             state,
//             stateList: data,
//             type: "t16",
//           })}
//           maxWidth={true}
//           headerExpand
//           columns={columnsT16}
//           components={{
//             Toolbar: (props) => {
//               return (
//                 <div>
//                   {/* <MTableToolbar {...props} /> */}
//                   <div className="font-bold text-sm w-full bg-[#0171c0] flex flex-row px-1 py-2 text-white border-b-[1px] border-gray-300">
//                     <div className="w-[400px]">{headerCompte}</div>
//                     <div className="flex-gow w-full  flex flex-col justify-center items-center pl-14">
//                       Etaler les montants sur les différents mois
//                     </div>
//                   </div>
//                 </div>
//               );
//             },
//           }}
//           rowStyle={(rowData) => {
//             return {
//               paddingLeft: "0px",
//               padding: "0px",
//               margin: "0px",
//               height: (rowData?.type === 3 || rowData?.space) && "20px",
//               fontSize: rowData.type ? 13 : 12,
//               // fontWeight: rowData.type && "bolder",
//               color: rowData?.type === 4 && "white",

//               backgroundColor:
//                 rowData?.type === 1
//                   ? "#fde9d9"
//                   : rowData?.type === 2
//                   ? "#99ff65"
//                   : rowData?.type === 4
//                   ? "#31859b"
//                   : rowData?.type === 3 && "#7f7f7f",
//             };
//           }}
//           editable={{
//             isEditable: (rowData) =>
//               !rowData.relation ||
//               !rowData.specialLocal ||
//               !rowData.fromTable ||
//               !rowData.fromTableList ||
//               !rowData.space, // only name(a) rows would be editable
//             isEditHidden: (rowData) =>
//               rowData.relation ||
//               rowData.special ||
//               rowData.specialLocal ||
//               rowData.fromTable ||
//               rowData.fromTableList ||
//               rowData.space,

//             onRowUpdate: (newData, oldData) =>
//               new Promise((resolve, reject) => {
//                 setTimeout(() => {
//                   updateRow(oldData, newData, resolve, reject);
//                 }, 1000);
//               }),
//           }}
//         />
//       )}
//     </div>
//   );
// };

// export default T16;
