import { Divider, Select, MenuItem } from "@mui/material";
import React, { useState } from "react";
import Table_v3_2 from "../customTables/table_v3_2";
import { tables103,start103 } from "./t103";

const T104 = () => {

  return (
      <Table_v3_2
      title="Paramètres Chiffre d'affaires Biens et Services produits 1"
      start={start103}
      tables={tables103}
      redIndex={[6]}
      sumTitle="Vente de biens et services produits"
      />
  );
};

export default T104;
