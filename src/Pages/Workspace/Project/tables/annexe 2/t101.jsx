import { Divider, Select, MenuItem } from "@mui/material";
import React, { useState } from "react";
import Table_V3 from "../customTables/table_v3";

export const start101 = 1;
const tableName = "Paramètres Chiffre d'affaires Marchandises";
export const tables101 = [
  "7111 Ventes de marchandises au Maroc",
  "7113 Ventes de marchandises à l’étranger",
  "7118 Ventes de marchandises des exercices antérieurs",
  "7119 Rabais, remises et ristournes accordés par l’entreprise",
];

const T101 = () => {
  const [table, settable] = useState(0);

  return (
    <>
      <div className="flex flex-row justify-end items-center px-5">
        <Select value={table} onChange={(e) => settable(e.target.value)}>
          {tables101.map((table, index) => (
            <MenuItem key={index} value={index}>
              {table}
            </MenuItem>
          ))}
        </Select>
      </div>

      <Table_V3
        table={`a${start101 + table}`}
        tableName={tableName}
        title={tables101[table]}
        start={start101}
      
        nbrTable={tables101.length}
      />
    </>
  );
};

export default T101;
