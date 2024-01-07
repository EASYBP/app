import { useDispatch, useSelector } from "react-redux";

import { addAnnexe2_s, updateTable } from "../../../../../redux/projectSlice";

import SendRequest from "../../../../../Services/requests";
import { notifier } from "../../../../../redux/notifSlice";
import { TextField, Button, Accordion, AccordionSummary, Typography, AccordionDetails } from "@mui/material";

import { MyMaterial, cellStyle } from "../materialTable";
import { DataTable, GetValString, decodeString } from "../factoring";
import { MyMaterial2 } from "../materialTable2";
import { useNavigate } from "react-router-dom";
import ConfigTableDialog from "./dialogConfig";
import { ExpandMore } from "@mui/icons-material";


const Table_A2_S = ({ formule, title, bigTitle, indexP, hightTitle, sumIndexP, tableRef, personne }) => {
  const columns = (num) => {
    const defaultColumn = [
      {
        title: hightTitle || "Salariés / Fonction",
        field: "title",
        cellStyle: {
          padding: sumIndexP ? "20px 10px 20px 10px" : "2px 10px 2px 10px",
          // whiteSpace: 'nowrap',
          minWidth: "400px",
        },

      },
      {
        title: personne || formule === 9 ? "Personne à charge" : "",
        field: personne || formule === 9 ? "personne" : "charge",
        align: "center",
        cellStyle: {
          padding: "2px 10px 2px 10px",
          whiteSpace: 'nowrap',
          minWidth: "100px"
        },
      },
      {
        title: "Hypothèse",
        field: "hypothese",
        align: "center",
        cellStyle: {
          padding: "2px 10px 2px 10px",
          whiteSpace: 'nowrap',
        },
      },
      ...[...Array(12).keys()].map(i => ({
        title: (i + 1) + "-N+" + (num),
        field: "n" + (i + 1),
        align: "right",
        cellStyle: {
          padding: "2px 10px 2px 10px",
          whiteSpace: 'nowrap',
          minWidth: "100px"
        },
      })),


    ]
    return num == 0 ? [...defaultColumn, ...[...Array(4).keys()].map(i => ({
      title: "Année " + (i + 1),
  
      field: "a" + (i + 1),
      align: "right",
      cellStyle: {
        padding: "2px 10px 2px 10px",
        whiteSpace: 'nowrap',
        fontWeight:"bolder",
        minWidth: "100px"
      },
    }))] : 
    [...defaultColumn, {
      title: "Année " + num,
      field: "a" + num,
    
      align: "right",
      cellStyle: {
        fontWeight:"bolder",
        padding: "2px 10px 2px 10px",
        whiteSpace: 'nowrap',
        minWidth: "100px"
      },
    },]
  };
  const data = useSelector((state) => state.project.aS1)
  const config = useSelector((state) => state.config.aS1.type_1)
  const config2 = useSelector((state) => state.config.aS1.type_2)
  const config3 = useSelector((state) => state.config.aS1.type_3)
  const pid = useSelector((state) => state.project.id);
  const dis = useDispatch();
  const nav = useNavigate()

  const addRow = ({ oldData, newData, resolve, reject, index }) => {

    SendRequest({
      endpoint: "/table/annexe_special/" + pid,
      method: "post",
      body: { data: { ...newData, charge: 0 }, index, allData: data },
      success: (res) => {
        // data[data.findIndex((d) => d.i === newData.i)].value =
        //   parseFloat(newData.value.toString().replaceAll(",", ".")) || 0;
        // dis(updateTable({ data: [...data], table: "t7" }));

        dis(addAnnexe2_s({ newData: res.data }))
        resolve();

      },
      failed: (err) => {
        dis(notifier({ message: "Erreur de modification", type: "error" }));
        reject();
      },
    });
  }

  const updateRow = ({ oldData, newData, resolve, reject, index }) => {

    SendRequest({
      endpoint: "/table/annexe_special/" + pid + "/" + oldData._id,
      method: "put",
      body: { data: newData, tab: index, indexP, fullData: data },
      success: (res) => {
        dis(addAnnexe2_s({ newData: res.data }))
        resolve();
      },
      failed: (err) => {
        dis(notifier({ message: "Erreur de modification", type: "error" }));
        reject();
      },
    });
  }
  const deleteRow = (oldData, resolve, reject) => {
    SendRequest({
      endpoint: "/table/annexe_special/" + pid + "/" + oldData._id,
      method: "delete",
      body: {},
      success: (res) => {
        dis(addAnnexe2_s({ newData: res.data }))
        resolve();

      },
      failed: (err) => {
        dis(notifier({ message: "Erreur de modification", type: "error" }));
        reject();
      },
    });
  }
  const sumIndex = ({ index, title, num, datas }) => {
    
    const obj = {
      title,
      charge: "",
      hypothese: ""
    }
    if (index) {
      for (let i = 1; i <= 12; i++) {
        obj[`n${i}`] = GetValString(data.map((d) => d.extra[`${index}`].values[num][`n${i}`]).reduce((a, b) => a + b))
      }
    } else {

      for (let i = 1; i <= 12; i++) {

        obj[`n${i}`] = GetValString(datas.map((d) => decodeString(d[`n${i}`])).reduce((a, b) => a + b))
      }

        obj[`a${num+1}`] = GetValString(datas.map((d) => decodeString(d[`a${num+1}`])).reduce((a, b) => a + b))
    
    }
    return obj
  }
  const getSumIndex = ({ num }) => {
    const data = []
    data.push(sumIndex({ index: 1, num, title: "Caisse retraite-Part salariale" }))
    data.push(sumIndex({ index: 2, num, title: "Caisse retraite-Part patronnale" }))
    data.push(sumIndex({ index: 3, num, title: "Mutuelle-Part salariale" }))
    data.push(sumIndex({ index: 4, num, title: "Mutuelle-Part patronnale" }))
    data.push(sumIndex({ index: 5, num, title: "Autres organismes sociaux-Part salariale" }))
    data.push(sumIndex({ index: 6, num, title: "Autres organismes sociaux-Part patronnale" }))
    return data

  }

  const getConfig = (formule) => config.filter((c) => c.id == formule)[0]
  // const f1 = ({ data, num, obj, item }) => {
  const salarial = ["1", "3", "5"]
  const fIndexP = ({ e, num, i }) => {
    if (!indexP) {
      let value = e.values[num][`n${i}`]

      return { hypothese: e.hypothese, value }
    }
    else {

      let value = e.extra[`${indexP}`].values[num][`n${i}`]

      return { hypothese: e.hypothese === 0 ? "" : e.hypothese, value, charge: "" }
    }
  }
  const f1 = ({ item }) => {
    const cf = getConfig(1)

    let charge = cf.field.charge
    let hypothese = cf.field.hypothese
    let r = item * (hypothese / 100)
    let value = r < charge ? r : charge
    return { value, charge, hypothese }
  }
  const f2 = ({ item }) => {
    const cf = getConfig(2)

    let charge = cf.field.charge
    let hypothese = cf.field.hypothese
    let value = charge < item ? charge * (hypothese / 100) : item * (hypothese / 100)
    return { value, charge, hypothese }
  }
  const f3 = ({ item }) => {
    const cf = getConfig(3)

    let charge = 0
    let hypothese = cf.field.hypothese

    let value = item * (hypothese / 100)
    return { value, charge, hypothese }
  }
  const f4 = ({ item, e, num, i }) => {
    let charge
    let hypothese

    let sum = salarial.map((s) => e.extra[s].values[num][`n${i}`]).reduce((a, b) => a + b)
    let value = f1({ item }).value + f2({ item }).value + f3({ item }).value + sum
    return { value, charge, hypothese }
  }
  const f5 = ({ item, e, num, i }) => {
    let charge
    let hypothese
    let value = item - f4({ item, e, num, i }).value
    return { value, charge, hypothese }
  }
  const f6 = ({ item, e, num, i, isnumber }) => {
    const table = config2

    let charge
    let hypothese
    let check = f5({ i, e, item, num }).value

    let value = 0
    for (const t of table) {

      if (t.max !== undefined) {
        if (check <= t.max) {
          if (check > t.min || t.min === undefined) {
            value = t.value
          }
        }
      } else {
        if (t.min < check) {
          value = t.value
        }
      }
    }
    return { value: isnumber ? value : GetValString(value) + "%", charge, hypothese, notConvert: true }
  }

  const f7 = ({ item, e, num, i, isnumber }) => {
    const table = config3

    let charge
    let hypothese
    let check = f5({ i, e, item, num }).value

    let value = 0
    for (const t of table) {

      if (t.max !== undefined) {
        if (check <= t.max) {
          if (check > t.min || t.min === undefined) {
            value = t.value
          }
        }
      } else {
        if (t.min < check) {
          value = t.value
        }
      }
    }
    return { value: isnumber ? value : GetValString(value), charge, hypothese, notConvert: true }
  }

  const f8 = ({ item, e, num, i }) => {
    let charge
    let hypothese
    const _f5 = f5({ item, e, num, i }).value
    const _f6 = f6({ item, e, num, i, isnumber: true }).value / 100
    const _f7 = f7({ item, e, num, i, isnumber: true }).value
    let value = _f5 * _f6 - _f7
    return { value, charge, hypothese }
  }

  const f9 = ({ e }) => {
    const cf = getConfig(9)

    const personCharge = cf.field.charge
    let charge
    let hypothese
    let value = personCharge * e.personne
    return { value, charge, hypothese }
  }
  const f10 = ({ item, e, num, i }) => {
    let charge
    let hypothese
    let value = f8({ item, e, num, i }).value - f9({ e }).value
    return { value: value >= 0 ? value : 0, charge, hypothese }
  }
  const f11 = ({ item, e, num, i }) => {
    let charge
    let hypothese
    const _f = item
    const _f2 = f2({ item }).value
    const _f3 = f3({ item }).value
    const _f10 = f10({ item, e, num, i }).value
    const value = _f - _f2 - _f3 - _f10
    return { value, charge, hypothese }
  }

  const fPercentage = ({ item, formule }) => {
    const cf = getConfig(formule)

    let percent = cf.field.hypothese
    let charge
    let hypothese = percent
    let value=item * (percent / 100)
    if(formule==13){
     charge=cf.field.charge
     value=charge<item?charge* (percent / 100):item* (percent / 100)
    }
  
    return { value, charge, hypothese }
  }
  const f16 = ({ item }) => {
    let charge
    let hypothese

    const value = f2({ item }).value + f3({ item }).value
    return { value, charge, hypothese }
  }
  const f17 = ({ item }) => {
    let charge
    let hypothese

    const value = [12, 13, 14, 15].map((v, i) => fPercentage({ item, formule: v }).value).reduce((a, b) => a + b)
    return { value, charge, hypothese }
  }

  const getData = ({ data, num }) =>
    data.map(d => {
      const e = d
      let obj = { ...e }
        let sum=0
      for (let i = 1; i < 13; i++) {
        let value
        let charge
        let hypothese
        let f
        const item = indexP ? d.title : e.values[num][`n${i}`]

        switch (formule) {
          case 1:
            f = f1({ item })
            break;
          case 2:
            f = f2({ item })

            break;
          case 3:
            f = f3({ item })

            break;
          case 4:
            f = f4({ item, e, num, i })
            break
          case 5:
            f = f5({ item, e, num, i })
            break
          case 6:
            f = f6({ item, e, num, i, })

            break;

          case 7:
            f = f7({ item, e, num, i })

            break;
          case 8:
            f = f8({ item, e, num, i })

            break;
          case 9:
            f = f9({ e })

            break;
          case 10:
            f = f10({ item, e, num, i })

            break;
          case 11:
            f = f11({ item, e, num, i })

            break;
          case 12:
            f = fPercentage({ item, formule })
            break;
          case 13:
            f = fPercentage({ item, formule })
            break;
          case 14:
            f = fPercentage({ item, formule })
            break;
          case 15:
            f = fPercentage({ item, formule })
            break;
          case 16:
            f = f16({ item })
            break;
          case 17:
            f = f17({ item })
            break;
          default:
            f = fIndexP({ e, num, i })
            break;
        }
        obj.charge = f.charge ? GetValString(f.charge) : ""
        obj.hypothese = f.hypothese ? GetValString(f.hypothese) + "%" : ""
        sum+=f.value
        obj[`n${i}`] = f.notConvert ? f.value : GetValString(f.value)
      }
      
        //  obj[`a${num}`] = GetValString(sum)
        //  const o={['']:r}
    //  if(num!=0){
      Object.assign(obj,{[`a${num+1}`]:GetValString(sum)})
    //  }else{
    //   for (let index = 1; index < 5; index++) {
    //     Object.assign(obj,{[`a${index}`]:getData({data,num})[`a$`]})
        
    //   }
    //  }
      
      return obj
    })


  const getSum = ({ num, datas }) => {
    const obj = {}
    if (indexP) {
      Object.assign(obj, { ...sumIndex({ index: indexP, num }) })
    } else {
      Object.assign(obj, { ...sumIndex({ num, datas }) })
    }
    obj['title'] = title || "Salariés / Fonction"
    obj['isTitle'] = true
    return obj
  }


  return (
    <div>

      <div className="flex flex-row gap-6">
        {[...Array(4).keys()].map(((k, i) => {
          const datas = getData({ data, num: k })
          return <MyMaterial2
            title={bigTitle || ""}
            ref={tableRef}
            data={sumIndexP ? getSumIndex({ num: k }) : [getSum({ num: k, datas }), ...datas]}
            columns={columns(k + 1)}
            portrait
            titleColor="rgb(49, 133, 155)"
            rowStyle={(rowData) => {
              return {
                padding: sumIndex ? "20px 0px" : "0px",
                margin: "0px",
                fontSize: sumIndexP ? 13 : 12,
                fontWeight: (sumIndexP || rowData.isTitle  || rowData.isSum==true) && "bolder",
                color: sumIndexP && "white",

                backgroundColor: sumIndexP && "rgb(49, 133, 155)"
              };
            }}
            editable={{
              isEditable: (rowData) => formule ? false : !rowData.isTitle, // only name(a) rows would be editable
              isEditHidden: (rowData) => formule ? true : rowData.isTitle,
              //  isDeletable: (rowData) => rowData.name === "b", // only name(b) rows would be deletable,
              isDeleteHidden: (rowData) => formule || indexP ? true : rowData.isTitle,

              onRowAdd: (i !== 0 || formule || indexP || sumIndexP) ? undefined : (newData) =>
                new Promise((resolve, reject) => {

                  addRow({ newData, resolve, reject, index: i });

                }),
              onRowDelete: sumIndexP ? undefined : (oldData) =>
                new Promise((resolve, reject) => {

                  deleteRow(oldData, resolve, reject);

                }),
              onRowUpdate: sumIndexP ? undefined : (newData, oldData) =>
                new Promise((resolve, reject) => {

                  updateRow({ oldData, newData, resolve, reject, index: i });

                }),
            }}
          />

        }))}
      </div>

    </div>
  );
};

export default Table_A2_S;
