import { Divider, Select, MenuItem } from "@mui/material";
import React, { useState } from "react";
import Table_V3 from "../customTables/table_v3";

export const start111 = 20;
const tableName = "Paramètres Achats revendus de marchandises";
export const tables111 = [
    '6111 Achats de marchandises "groupe A"',
    '6112 Achats de marchandises "groupe B"',
    "6114 Variation de stocks de marchandises",
    "6118 Achats revendus de marchandises des exercices antérieurs",
    "6119 Rabais, remises et ristournes obtenus sur achats de marchandises"
];
//end=24
const T111 = () => {
    const [table, settable] = useState(0);
    const getMoreProps = (index) => {
        switch (index) {
            case 2:
                return {
                    disabled: true,
                    fill: "#7f7f7f"
                }
            default:
                return {}
        }
    }
    const getSectionTitleTable = (index) => {
        switch (index) {
            case 0:
                return 'Achats de marchandises "groupe A" prévisionnel HT N+1'
            case 1:
                return 'Achats de marchandises "groupe B" prévisionnel HT N+1'
            case 2:
                return 'Variation de stocks de marchandises prévisionnel HT N+1'
            case 3:
                return 'Achats revendus de marchandises des exercices antérieurs prévisionnels HT N+1'
            case 4:
                return 'RRR prévisionnels obtenues sur achats de marchandises HT N+1'
            default:
                return ""
        }
    }
    const getSectionTitleSum = (index) => {
        switch (index) {
            case 0:
                return 'Total Achats de marchandises "groupe A"'
            case 1:
                return 'Total Achats de marchandises "groupe B"'
            case 2:
                return 'Total Variation de stocks de marchandises'
            case 3:
                return 'Total Achats revendus de marchandises des exercices antérieurs'

            case 4:
                return 'Total RRR obtenues'
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
                return 'TOTAL Variation de stocks de marchandises'
            case 3:
                return 'Total Achats revendus de marchandises des exercices antérieurs'
            case 4:
                return 'TOTAL Rabais, remises et ristournes obtenues sur achats de marchandises'
            default:
                return ""
        }
    }

    return (
        <>
            <div className="flex flex-row justify-end items-center px-5">
                <Select value={table} onChange={(e) => settable(e.target.value)}>
                    {tables111.map((table, index) => (
                        <MenuItem key={index} value={index}>
                            {table}
                        </MenuItem>
                    ))}
                </Select>
            </div>
         
            <Table_V3
                table={`a${start111 + table}`}
                tableName={tableName}
                title={tables111[table]}
                start={start111}
                fournisseur
                {...getMoreProps(table)}
                bigTotal="Achats revendus de marchandises"
                nbrTable={tables111.length}
                totalSection={getTotalSection(table)}
                sectionTitleTable={getSectionTitleTable(table)}
                sectionTitleSum={getSectionTitleSum(table)}
            />
        </>
    );
};

export default T111;
