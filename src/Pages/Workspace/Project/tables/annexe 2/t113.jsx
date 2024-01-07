import { Divider, Select, MenuItem } from "@mui/material";
import React, { useState } from "react";
import Table_V3 from "../customTables/table_v3";

export const start113 = 25;
const tableName = "Paramètres Achats de Matières et Fournitures 0";
export const tables113 = [
    '61211 Achats de matières premières A',
    '61212 Achats de matières premières B',
];
//end=26
const T113 = () => {
    const [table, settable] = useState(0);

    const getSectionTitleTable = (index) => {
        switch (index) {
            case 0:
                return 'Achats de matières premières A prévisionnel HT N+1'
            case 1:
                return 'Achats de matières premières B prévisionnel HT N+1'
            default:
                return ""
        }
    }
    const getSectionTitleSum = (index) => {
        switch (index) {
            case 0:
                return 'Total Achats de matières premières A'
            case 1:
                return 'Total Achats de matières premières B'
            default:
                return ""
        }
    }

    const getTotalSection = (index) => {
        switch (index) {
            case 0:
                return 'Total Achats de marchandises "groupe A"'
            case 1:
                return 'Total Achats de marchandises "groupe B"'
            case 2:

            default:
                return ""
        }
    }

    return (
        <>
            <div className="flex flex-row justify-end items-center px-5">
                <Select value={table} onChange={(e) => settable(e.target.value)}>
                    {tables113.map((table, index) => (
                        <MenuItem key={index} value={index}>
                            {table}
                        </MenuItem>
                    ))}
                </Select>
            </div>
        
            <Table_V3
                table={`a${start113 + table}`}
                tableName={tableName}
                title={tables113[table]}
                start={start113}
                fournisseur
                bigTotal="6121 Achats de matières premières (A & B)"
                nbrTable={tables113.length}
                totalSection={getTotalSection(table)}
                sectionTitleTable={getSectionTitleTable(table)}
                sectionTitleSum={getSectionTitleSum(table)}
            />
        </>
    );
};

export default T113;
