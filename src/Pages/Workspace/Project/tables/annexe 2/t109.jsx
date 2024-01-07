import { Divider, Select, MenuItem } from "@mui/material";
import React, { useState } from "react";
import Table_V3 from "../customTables/table_v3";

export const start109 = 15;
const tableName = "Paramètres Subventions d'exploitation";
export const tables109 = [
  "7181 Jetons de présence reçus",
  "7182 Revenus des immeubles non affectés à l'exploitation",
  "7185 Profits sur opérations faites en commun",
  "7186 Transfert de pertes sur opérations faites en commun",
  "7188 Autres produits d'exploitation des exercices antérieurs"
];
//end=19
const T109 = () => {
  const [table, settable] = useState(0);

  return (
    <>
      <div className="flex flex-row justify-end items-center px-5">
        <Select value={table} onChange={(e) => settable(e.target.value)}>
          {tables109.map((table, index) => (
            <MenuItem key={index} value={index}>
              {table}
            </MenuItem>
          ))}
        </Select>
      </div>
      <Table_V3
        table={`a${start109 + table}`}
        tableName={tableName}
        title={tables109[table]}
        start={start109}
        nbrTable={tables109.length}
        sectionTitleTable="Autres produits d'exploitation des exercices antérieurs prévisionnels HT N+1"
        sectionTitleSum="Total Autres produits d'exploitation des exercices antérieurs"
      />
    </>
  );
};

export default T109;
