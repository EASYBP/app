import { useDispatch, useSelector } from "react-redux";

import { updateTable } from "../../../../../redux/projectSlice";

import SendRequest from "../../../../../Services/requests";
import { notifier } from "../../../../../redux/notifSlice";
import { TextField } from "@mui/material";


import { MyMaterial, cellStyle } from "../materialTable";
import { DataTable, GetValString } from "../factoring";
import { MyMaterial2 } from "../materialTable2";
import { useNavigate } from "react-router-dom";
import Table_A2_S from "../customTables/table_a2_s";
import { useRef } from 'react';
import { useEffect } from 'react';




const T121 = () => {
  const ref=useRef()

  useEffect(() => {
    if(ref.current){
      console.log('ref :>> ', ref);
    }
  }, [ref.current])
return <div>
  <Table_A2_S tableRef={ref} sumIndexP hightTitle="Organismes sociaux (hors CNSS)" bigTitle="Paramètres Organismes sociaux (hors CNSS)"/>
  <Table_A2_S indexP={1} hightTitle="Caisse retraite-Part salariale"/>
  <Table_A2_S indexP={2} hightTitle="Caisse retraite-Part patronnale"/>
  <Table_A2_S indexP={3} hightTitle="Mutuelle-Part salariale"/>
  <Table_A2_S indexP={4} hightTitle="Mutuelle-Part patronnale" />
  <Table_A2_S indexP={5} hightTitle="Autres organismes sociaux-Part salariale" />
  <Table_A2_S indexP={6} hightTitle="Autres organismes sociaux-Part patronnale"/>
</div>

};

export default T121;
