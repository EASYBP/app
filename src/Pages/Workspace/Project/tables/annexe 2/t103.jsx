import { Divider, Select, MenuItem } from "@mui/material";
import React, { useState } from "react";
import Table_V3 from "../customTables/table_v3";

export const start103 = 5;
const tableName = "Paramètres Chiffre d'affaires Biens et Services produits";
export const tables103 = [
  "7121 Ventes de biens produits au Maroc",
  "7122 Ventes de biens produits à l’étranger",
  "7124 Ventes de services produits au Maroc",
  "7125 Ventes de services produits à l'étranger",
  "7126 Redevances pour brevets, marques, droits et valeurs similaires",
  "7127 Ventes de produits accessoires",
  "7128 Ventes de biens et services produits des exercices antérieurs",
  "7129 Rabais, remises et ristournes accordés par l’entreprise",
];

//const end=12
const T103 = () => {
  const [table, settable] = useState(0);
  return (
    <>
      <div className="flex flex-row justify-end items-center px-5">
        <Select value={table} onChange={(e) => settable(e.target.value)}>
          {tables103.map((table, index) => (
            <MenuItem key={index} value={index}>
              {table}
            </MenuItem>
          ))}
        </Select>
      </div>

      <Table_V3
        table={`a${start103 + table}`}
        tableName={tableName}
        title={tables103[table]}
        start={start103}
        nbrTable={tables103.length}
      />
    </>
  );
};

export default T103;
