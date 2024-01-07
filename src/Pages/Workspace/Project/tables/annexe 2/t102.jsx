import { Divider, Select, MenuItem } from "@mui/material";
import React, { useState } from "react";
import Table_v3_2 from "../customTables/table_v3_2";
import { tables101,start101 } from "./t101";

const T102 = () => {

  return (
      <Table_v3_2
      title="Paramètres Chiffre d'affaires Marchandises 1"
      start={start101}
      tables={tables101}
      redIndex={[2]}
      sumTitle="Ventes de marchandises"
      />
  );
};

export default T102;
