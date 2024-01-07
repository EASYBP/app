import { Divider, Select, MenuItem } from "@mui/material";
import React, { useState } from "react";
import Table_v3_2 from "../customTables/table_v3_2";
import { tables101,start101 } from "./t101";
import { start107, tables107 } from "./t107";

const T108 = () => {

  return (
      <Table_v3_2
      title="Paramètres Subventions d'exploitation 1"
      start={start107}
      tables={tables107}
      redIndex={[1]}
      sumTitle="Subventions d'exploitation"
      />
  );
};

export default T108;
