import React from 'react'
import { tables101 } from '../annexe 2/t101';
import { MyMaterial, cellStyle } from '../materialTable'
import { LIST_ANNEE, LIST_MOIS } from './table_v3'
import { useSelector } from 'react-redux';
import { DataTable } from '../factoring';
import { GetValString } from '../factoring';
import { decodeString } from '../factoring';
export const columns = [
  {
    title: "",
    field: "_",

    cellStyle: {
      padding: "2px 10px 2px 10px",
      //   minWidth: 100,
      // maxWidth: 100,
      //   ...cellStyle,
    },
    render: (data) => {
      return data._==true || data._=='red' && <div className='h-4 w-6 rounded-sm bg-red-500'></div>
    }
  },
  {
    title: "",
    field: "__",


    cellStyle: {
      padding: "2px 10px 2px 10px",
      //   minWidth: 100,
      minWidth: "350px",
    }
    //   ...cellStyle,

  },
  {
    title: "12-N (réel)",
    field: "reel",
    cellStyle: {
      minWidth: "140px",
      padding: "2px 10px 2px 10px",
    },
  },
  ...LIST_MOIS.map((l, i) => ({
    title: (i + 1).toString() + "-N+1",
    field: i.toString(),

    type: "numeric",
    cellStyle: {
      //   minWidth: 100,
      padding: "2px 10px 2px 10px",
      whiteSpace: 'nowrap',
      minWidth: "100px",

    },
 
  })),
  {
    title: "Budget annuel N+1",
    field: "t0",
    type: "numeric",
    cellStyle: {
      padding: "2px 10px 2px 10px",
      minWidth: "200px",
    },
  },
  {
    title: "BP N+2",
    field: "t1",
    type: "numeric",
    cellStyle: {
      padding: "2px 10px 2px 10px",
      minWidth: "100px",
    },
  },
  {
    title: "BP N+3",
    field: "t2",
    type: "numeric",
    cellStyle: {
      minWidth: "100px",
      padding: "2px 10px 2px 10px",
    },
  },
  {
    title: "BP N+4",
    field: "t3",
    type: "numeric",
    cellStyle: {
      minWidth: "100px",
      padding: "2px 10px 2px 10px",
    },
  }

]
const emptyCompte = () => ({
  num: 0,
  total:true,
  title:"",
  commentaire: "",
  taux: 0,
  annee: LIST_ANNEE.map((a) => {
    return LIST_MOIS.map((i) => {
      return { ht: "0.0", tva: "0.0", tcc: "0.0" };
    });
  }),
});
const signelTotal = ({ state, table,sectionTitleSum ,allNull }) => {
 
   return  allNull?emptyCompte():  DataTable({
     state,
     stateList: state[table],
     sectionTitleSum, 
     type: "A2",
   })
     .map((d) => d.comptes.filter((c) => c.total)[0])
     .reduce((a, b) => {
       return {
         title: "",
         taux: "",
         commentaire: "",
         annee: a.annee.map((an, i1) =>
           an.map((am, i2) => {
             return {
               ht: GetValString(
                 decodeString(a.annee[i1][i2].ht) +
                 decodeString(b.annee[i1][i2].ht)
               ),
 
             };
           })
         ),
       };
     });
  
 };
//   const getTotalTable = ({ table, state, start, nbrTable }) => {
//     const tables = [];
//     for (let i = 0; i < nbrTable; i++) {
//       tables.push(`a${start + i}`);
//     }
//     return tables
//       .map((s) => signelTotal({ state, table: s }))
//       .reduce((a, b) => {
//         return {
//           title: "",
//           taux: "",
//           commentaire: "",
//           annee: a.annee.map((an, i1) =>
//             an.map((am, i2) => {
//               return {
//                 ht: GetValString(
//                   decodeString(a.annee[i1][i2].ht) +
//                     decodeString(b.annee[i1][i2].ht)
//                 ),
//                 tva: GetValString(
//                   decodeString(a.annee[i1][i2].tva) +
//                     decodeString(b.annee[i1][i2].tva)
//                 ),
//                 ttc: GetValString(
//                   decodeString(a.annee[i1][i2].ttc) +
//                     decodeString(b.annee[i1][i2].ttc)
//                 ),
//               };
//             })
//           ),
//         };
//       });
//   };
const Table_v3_2 = ({ title, tables, start, redIndex,sumTitle,allNull,decompose,custom }) => {
  const state = useSelector((state) => state.project);
  const dataTable = ({ table, title, index }) => {
  
    const obj = {
      _:(redIndex && redIndex.includes(index)) ? "red":"",
      __: title,
      reel: ""
    }
    for (let i = 0; i < table.annee[0].length; i++) {
      obj[i] = table.annee[0][i].ht;

    }
    const list = []
    for (let i = 0; i < table.annee.length; i++) {
      let sum = 0;
      for (let j = 0; j < table.annee[i].length; j++) {
        
        sum += decodeString(table.annee[i][j].ht);

      }
      list.push(sum)
    }
    for (let i = 0; i < list.length; i++) {
      obj[`t${i}`] = GetValString(list[i]);

    }
    return obj
  
  }
  const getSumData=(data)=>{
    return data.reduce((a,b)=>{
      const obj= {
        _: "",
        sum:true,
        __: sumTitle,
        reel: ""

      }
      for (let i = 0; i < LIST_MOIS.length; i++) {
        obj[i] = GetValString(decodeString(a[i])+decodeString(b[i]));
      }
      for (let i = 0; i < LIST_ANNEE.length; i++) {
        obj[`t${i}`] = GetValString(decodeString(a[`t${i}`])+decodeString(b[`t${i}`]));
      }
      return obj
    })
  }


  const getTableDecompose=({ state, table,sectionTitleSum ,index })=>{
   const exclude=["61211","61212"]
   const add="61212"
   const exc= exclude.some((e)=>tables[index].includes(e))
   const isAdd=tables[index].includes(add)
    const l=  DataTable({
       state,
       stateList: state[table],
       sectionTitleSum, 
       type: "A2",
     })
   
   
    const result=[]

    for(const s of l){
     const table=s.comptes.filter((c) => c.total)[0]
     const obj = {
       _:"",
       __: s.title,
       reel: ""
     }
 
     for (let i = 0; i < table.annee[0].length; i++) {
       obj[i] = table.annee[0][i].ht;
     
     }
     const list = []
     for (let i = 0; i < table.annee.length; i++) {
       let sum = 0;
       for (let j = 0; j < table.annee[i].length; j++) {
         
         sum += decodeString(table.annee[i][j].ht||"0");
   
       }
       list.push(sum)
     }
     for (let i = 0; i < list.length; i++) {
       obj[`t${i}`] =
        GetValString(
        list[i]
        );
 
     }
     result.push(obj)
    }
   
    const total=result.reduce((a,b)=>{
   
     const obj = {
        _:exc?"":(redIndex && redIndex.includes(index)) ? true: "yellow",
        __: tables[index],
        reel: ""
      }
      for (let i = 0; i < 12; i++) {
        obj[i] = GetValString(decodeString(a[i])+decodeString(b[i]));
      }
      for (let i = 0; i < 4; i++) {
        obj[`t${i}`] =GetValString(decodeString(a[`t${i}`])+decodeString(b[`t${i}`]))
  
      }
      return obj
    })
     if(isAdd){
      const back=getTableDecompose({state, table:"a25",index:index-1,decompose})
      //
      const sum=[...back,total].reduce((a,b)=>{
        const obj= {
          _: 'yellow',
          sum:true,
          __: "6121 Achats de matières premières (A & B)",
          reel: ""
  
        }
        for (let i = 0; i < LIST_MOIS.length; i++) {
          obj[i] = GetValString(decodeString(a[i])+decodeString(b[i]));
        }
        for (let i = 0; i < LIST_ANNEE.length; i++) {
          obj[`t${i}`] = GetValString(decodeString(a[`t${i}`])+decodeString(b[`t${i}`]));
        }
        return obj
      })
      return [total,sum]
     }
    return exc?[total]: [...result,total]
 
}
  const data = tables.map((t, i) => {
    return decompose?getTableDecompose({allNull, state, table: "a" + (start + i).toString(), title: t,decompose,index: i }): dataTable({ table: signelTotal({allNull, state, table: "a" + (start + i).toString(), title: t }), title: t, index: i })
  })

  return (
    <div className=''>
      <MyMaterial maxWidth
      style={{
       width:"100vw"
      }}
      
      title={title} data={decompose?data.reduce((a,b)=>[...a,...b]):[...data,getSumData(data)]} columns={columns} rowStyle={(rowData) => {
        return {
          margin: "0px",
          fontSize: 12,
          minWidth: '300px',
         fontWeight:  rowData._=="yellow" || rowData.sum && "bolder",
           //color: rowData?._ =="yellow" ? "white" : rowData?.p === 3 && "yellow",

          backgroundColor:
            rowData._=="yellow" || rowData.sum
              && "#FFFF99",
        };
      }} />
    </div>
  )
}

export default Table_v3_2