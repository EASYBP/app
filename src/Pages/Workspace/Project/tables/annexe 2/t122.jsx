
import { start111, tables111 } from "./t111";
import React from 'react'
import { tables101 } from '../annexe 2/t101';
import { MyMaterial, cellStyle } from '../materialTable'

import { useSelector } from 'react-redux';

import { GetValString } from '../factoring';
import { decodeString } from '../factoring';
import { columns } from "../customTables/table_v3_2";

const T122 = () => {

  return (
    <Table

      start={start111}
      tables={data}
    />
  );
};

export default T122;


const data = [{
  id: 61711,
  title: "Appointements et salaires",
  init: true,
},
{
  id: 61712,
  title: "Primes et gratifications",
  gris: true
},
{
  id: 61713,
  title: "Indemnités et avantages divers",
  gris: true
},
{
  id: 61714,
  title: "Commissions au personnel",
  gris: true
},
{
  id: 61715,
  title: "Rémunérations des administrateurs, gérants et associés",
  gris: true
},
{
  id: 6171,
  title: "Rémunérations du personnel",
  relation: [61711, 61712]
},
{
  id: 61741,
  title: "Cotisations de sécurité sociale (CNSS obligatoire, retraite, mutuelle, autres organismes sociaux)",
  type: 1,

},
{
  id: 61742,
  title: "Cotisations aux caisses de retraite",
  type: 2,

},
{
  id: 61743,
  title: "Cotisations aux mutuelles",
  type: 3,

},
{
  id: 61744,
  title: "Autres organismes sociaux",
  type: 4,

},

{
  id: 6174,
  title: "Charges sociales",
  relation: [61741, 61742, 61743, 61744]
},
{
  id: 61761,
  title: "Assurances groupe",
  gris: true
},
{
  id: 61762,
  title: "Prestations de retarites",
  gris: true
},
{
  id: 61763,
  title: "Allocations aux oeuvres sociales",
  gris: true
},
{
  id: 61764,
  title: "Habillement et vêtements de travail",
  gris: true
},
{
  id: 61765,
  title: "Indemnités de préavis et de licenciement",
  gris: true
},
{
  id: 61766,
  title: "Médecine de travail, pharmacie",
  gris: true
},
{
  id: 61768,
  title: "Autres charges sociales diverses (variation CP et charges sociales sur CP)",
  type: 5,
  red: true,

},
{
  id: 6176,
  title: "Charges sociales diverses",
  relation: [61768]
},
{
  id: 61771,
  title: "Appointements et salairess",
  gris: true
},
{
  id: 61774,
  title: "Charges sociales sur appointements et salaires de l’exploitant",
  gris: true
},
{
  id: 6177,
  title: "Rémunération de l'exploitant",
  relation: [61712]
},
{
  id: 0,
  title: "",
  type: 6,
  red: true,

},
{
  id: 6178,
  title: "Charges du personnel des exercices antérieurs",
  relation: [0]
},
]




const Table = ({ tables }) => {
  const config = useSelector((state) => state.config.aS1.type_1)
  const config2 = useSelector((state) => state.config.aS1.type_2)
  const config3 = useSelector((state) => state.config.aS1.type_3)
  const getConfig = (formule) => config.filter((c) => c.id == formule)[0]
  const state = useSelector((state) => state.project.aS1);
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
  const dataTable = ({ item }) => {
    const init = item.init
    const table = state
    const obj = {
      _: item.red && "red" || item.gris && "gris" || item.relation && "yellow" || "",
      __: item.title.length <= 0 ? "" : item.id + " " + item.title,
      reel: ""
    }
 
    if (item.relation) {
      return  {... getRelation(item.relation),...obj}
    } else {
      
      for (let i = 1; i <= 12; i++) {
        if (init) {
          obj[i - 1] = GetValString(table[0].values.map((v) => v[`n${i}`]).reduce((a, b) => a + b));
    
        } else {
          let value
          switch (item.type) {
            case 1:
             const list=[]
             for(let it of table){
              const item=it.values[0][`n${i}`]
              const v=[12, 13, 14, 15].map((v, i) => fPercentage({ item, formule: v }).value).reduce((a, b) => a + b)
              list.push(v)
             }
             value=list.reduce((a,b)=>a+b)
              break;
            case 2:   
              value=table.map((t)=>t.extra[`2`].values[0][`n${i}`]).reduce((a,b)=>a+b)
              break;
            case 3:
              value=table.map((t)=>t.extra[`4`].values[0][`n${i}`]).reduce((a,b)=>a+b)
              break;
            case 4:
              value=table.map((t)=>t.extra[`6`].values[0][`n${i}`]).reduce((a,b)=>a+b)
              break;
            // case 5:
            //   break;
          
            default:
              value = 0
              break;
          }
          obj[i - 1]=GetValString(value)
         
         
        }

      }
//rest


      const list = []
      for (let i = 0; i < 4; i++) {
        let sum = 0;

        const tab = table.map((t) => t.values[i])
     



        const sumT = tab.reduce((a, b) => {
          const obj = {}
          for (const n in a) {

            obj[n] = a[n] + b[n]
          }

          return obj
        })

        delete sumT._id
        for (const n in sumT) {
         
          sum += sumT[n]
        }

       

        list.push(sum)
      }
      for (let i = 0; i < list.length; i++) {
        if (init) {
          obj[`t${i}`] = GetValString(list[i]);
        }
        else {
          obj[`t${i}`] = GetValString(0)
        }
      }
      return obj
    }

  }


  const getRelation = (l) => {
    return tables.filter((t) => l.includes(t.id)).map((t) => dataTable({ item: t })).reduce((a, b) => {
      const obj = {}

      for (let i = 0; i < 12; i++) {
        obj[`${i}`] = GetValString(decodeString(a[`${i}`]) + decodeString(b[`${i}`]))
      }
      for (let i = 0; i < 4; i++) {
        obj[`t${i}`] = GetValString(decodeString(a[`t${i}`]) + decodeString(b[`t${i}`]))
      }
      return obj
    })
  }
  const data = tables.map((t, i) => {
    return dataTable({ item: t, index: i })
  })

  return (
    <div className=''>
      <MyMaterial maxWidth
        style={{
          width: "100vw"
        }}

        title={"Paramètres Masse salariale et charges sociales 2"}
        data={data}
        columns={columns}
        rowStyle={(rowData) => {
          return {
            margin: "0px",
            fontSize: 12,
            minWidth: '300px',
            fontWeight: rowData._ == "yellow" && "bolder",
            //color: rowData?._ =="yellow" ? "white" : rowData?.p === 3 && "yellow",

            backgroundColor:
              rowData._ == "yellow"
              && "#FFFF99" ||  rowData._ == "gris" && "#CCCCCC" || "white",
          };
        }} />
    </div>
  )
}

