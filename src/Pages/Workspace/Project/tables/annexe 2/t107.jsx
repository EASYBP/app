import { Divider, Select, MenuItem } from "@mui/material";
import React, { useState } from "react";
import Table_V3 from "../customTables/table_v3";

export const start107 = 13;
const tableName = "Paramètres Subventions d'exploitation";
export const tables107 = [
  "7161 Subventions d’exploitations reçues de l’exercice",
  "7168 Subventions d’exploitation reçues des exercices antérieurs"
];
//end=14
const T107 = () => {
  const [table, settable] = useState(0);

  return (
    <>
      <div className="flex flex-row justify-end items-center px-5">
        <Select value={table} onChange={(e) => settable(e.target.value)}>
          {tables107.map((table, index) => (
            <MenuItem key={index} value={index}>
              {table}
            </MenuItem>
          ))}
        </Select>
      </div>
      <Table_V3
        table={`a${start107 + table}`}
        tableName={tableName}
        title={tables107[table]}
        start={start107}
        nbrTable={tables107.length}
        sectionTitleTable="Subventions d'exploitation HT N+1"
        sectionTitleSum="Total Subventions d'exploitation"
      />
    </>
  );
};

export default T107;
