import { Divider, Select, MenuItem } from "@mui/material";
import React, { useState } from "react";
import Table_V3 from "../customTables/table_v3";
import Table_V3_total from "../customTables/table_v3_total";

export const start118 = 51;
const tableName = "Paramètres Autres achats et charges externes";
export const tables118 = [
    "6161 Impôts et taxes directs",
    "6165 Impôts et taxes indirects",
    "6167 Impôts, taxes et droits assimilés",
"6168 Impôts et taxes des exercices antérieurs"
];
//end=55
const T118 = () => {
    const [table, settable] = useState(0);


    return (
        <>
            <div className="flex flex-row justify-end items-center px-5">
                <Select value={table} onChange={(e) => settable(e.target.value)}>
                    {tables118.map((table, index) => (
                        <MenuItem key={index} value={index}>
                            {table}
                        </MenuItem>
                    ))}
                </Select>
            </div>
            {/* {`a${start116 + table}`} */}
                <Table_V3
                    table={`a${start118 + table}`}
                    tableName={tableName}
                    title={tables118[table]}
                    start={start118}
                    fournisseur

                    bigTotal="Paramètres Impôts et taxes"
                    nbrTable={tables118.length}
                  
                    completions={completions}
                    //    totalSection={getTotalSection(table)}
                    sectionTitleTable={""}
                    sectionTitleSum={"Total"}
                />
        </>
    );
};


export default T118;
const completions={
    title:[],
    commentaires:[]
}