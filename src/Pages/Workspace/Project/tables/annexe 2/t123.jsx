import { Divider, Select, MenuItem } from "@mui/material";
import React, { useState } from "react";
import Table_V3 from "../customTables/table_v3";
import Table_V3_total from "../customTables/table_v3_total";

export const start123 = 55;
const tableName = "Paramètres Autres charges d'exploitation";
export const tables123 = [
    "6181 Jetons de présence versés",
    "6182 Pertes sur créances irrécouvrables",
    "6185 Pertes sur opérations faites en commun",
"6186 Transfert de profits sur opérations faites en commun",
"6188 Autres charges dexploitation des exercices antérieurs"
];
//end=55
const T123 = () => {
    const [table, settable] = useState(0);


    return (
        <>
            <div className="flex flex-row justify-end items-center px-5">
                <Select value={table} onChange={(e) => settable(e.target.value)}>
                    {tables123.map((table, index) => (
                        <MenuItem key={index} value={index}>
                            {table}
                        </MenuItem>
                    ))}
                </Select>
            </div>
            {/* {`a${start116 + table}`} */}
                <Table_V3
                    table={`a${start123 + table}`}
                    tableName={tableName}
                    title={tables123[table]}
                    start={start123}
                  

                    bigTotal="TOTAL"
                    nbrTable={tables123.length}
                  totalSection=" TOTAL Autres charges d'exploitation des exercices antérieurs"
                    completions={completions}
                    //    totalSection={getTotalSection(table)}
                    sectionTitleTable={"Autres charges dexploitation des exercices antérieurs prévisionnelles HT N+1"}
                    sectionTitleSum={"Total"}
                />
        </>
    );
};


export default T123;
const completions={
    title:[],
    commentaires:[]
}