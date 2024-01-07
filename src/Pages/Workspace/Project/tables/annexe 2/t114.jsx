import { Divider, Select, MenuItem } from "@mui/material";
import React, { useState } from "react";
import Table_V3 from "../customTables/table_v3";
import Table_V3_total from "../customTables/table_v3_total";

export const start114 = 26;
const tableName = "Paramètres Achats de Matières et Fournitures";
export const tables114 = [
    '6121 Achats de matières premières (A & B)',
    '6122 Achats de matières et fournitures consommables',
    "6123 Achats d'emballages",
    "6124 Variation des stocks de matières et fournitures",
    "6125 Achats non stockés de matières et fournitures",
    "6126 Achats de travaux, études et prestations de service",
    "6128 Achats de matières et de fournitures des exercices antérieurs",
    "6129 Rabais, remises et ristournes obtenus sur achats consommés de matières et fournitures"
];
//end=34
const T114 = () => {
    const [table, settable] = useState(0);

    const getSectionTitleTable = (index) => {
        switch (index) {
            case 0:
                return 'Achats de matières premières A prévisionnel HT N+1'
            // case 1:
            //     return ''
            default:
                return ""
        }
    }
    const getSectionTitleSum = (index) => {
        switch (index) {
            case 0:
                return 'Total Achats de matières premières A'
            // case 1:
            //     return 'Total Achats de matières premières B'
            default:
                return "Total"
        }
    }
    const getMoreProps = (index) => {
        switch (index) {
            case 3:
                return {
                    disabled: true,
                    fill: "#7f7f7f"
                }
            default:
                return {}
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
                    {tables114.map((table, index) => (
                        <MenuItem key={index} value={index}>
                            {table}
                        </MenuItem>
                    ))}
                </Select>
            </div>
            {/* {`a${start114 + table}`} */}
            {table == 0 ?
                <Table_V3_total
                    tables={[{ table: 'a25', title: "Achats de matières premières A" }, { table: 'a26', title: "Achats de matières premières B" }]} />
                :
                <Table_V3
                    table={`a${start114 + table}`}
                    tableName={tableName}
                    title={tables114[table]}
                    start={25}
                    fournisseur
                    {...getMoreProps(table)}
                    bigTotal="Achat Matières et Fournitures"
                    nbrTable={9}
                    customTotal
                    completions={completions}
                    //    totalSection={getTotalSection(table)}
                    sectionTitleTable={""}
                    sectionTitleSum={"Total"}
                />}
        </>
    );
};

export default T114;


const completions = {
    title: [
        "Gel Nettoyant pour les mains (salariés)",
        "Serviette de tables (salariés)",
        "Lavettes multi-usages (nettoyage)",
        "Eponges (nettoyage)",
        "Papier Toilette (salariés)",
        "Essuie-tout (salariés )",
        "Mouchoirs (deux associés)",
        "Nettoyant WC (Nettoyant)",
        "Nettoyant cuisine (Nettoyant)",
        "Nettoyant sol (Nettoyant)",
        "Nettoyant à Vitre (Nettoyant)",
        "Désodorisants (salariés)",
        "Cuvette détartrant WC (Nettoyant)",
        "Eau de Javel (nettoyant)",
        "Liquide Vaisselle",
        "Ramettes Papier A4 pour imprimante Laser LEXMARK X925 à Toner (nombre de salariés de production)",
        "Ramettes Papier A3 pour imprimante Laser LEXMARK X925 à Toner (nombre de salariés de production)",
        "Rouleau Papier A0 pour imprimante traceur à Encre EPSON SURECOLOR SC-T5000 36 A0+ (nombre de salariés de production)",
        "Calque rouleau",
        "Ramettes Papier Calque A3 et A4",
        "Enveloppes : \n - format 115  x 225;\n - format 229 x 324",
        "Stylo",
        "Stylo Feutre: (salariés de production)",
        "Crayon (sans recharges / one shot) (salariés de production)",
        "Marqueur : ",
        "Surligneur : (salariés de production)",
        "Correcteurs (nombre de salariés de production)",
        "Gomme: ",
        "Boîte archives",
        "Caisse archive (gros carton) : ",
        "Chemises colorées A4 :",
        "Chemise plastique A4 :",
        "Chemises à rabat:",
        "Intercalaires A à Z",
        "Intercalaire Trapèze (petit carton):",
        "Intercalaires Neutres",
        "Classeurs:",
        "Trieurs",
        "Parapheurs",
        "Boite de classement",
        "Dossiers suspendus",
        "Portes documents",
        "Cahier (nombre de salariés de production)",
        "Bloc-notes (nombre de salariés de production)",
        "Notes (pense bête) (nombre de salariés de production)",
        "Pochette Plastique perforée A4",
        "Pochette Plastique perforée A3",
        "Agenda (chef de production / projet)",
        "Baguettes serre-feuilles (salariés de production)",
        "Baguettes pour reliure (salariés de production)",
        "Couverture de reliure (plastique) (salariés de production)",
        "Couverture de reliure (cartons) (salariés de production)",
        "Calculatrice:",
        "Cachets",
        "Agrapheuse:",
        "Ôte-agrafes",
        "Agraphes (salariés de production)",
        "Colle",
        "Ruban adhésif",
        "Règle:",
        "Trombones",
        "Perforatrices (salariés entreprises)",
        "Ciseaux: ",
        "Toner pour l'imprimante Laser LEXMARK X 925 (A4 et A3) (consommation papier c a d nombre de salariés de production)",
        "Cartouche d'encre pour A4 :\n - Noir (6000 pages);\n - 3 Couleurs (5000 pages / couleur)",
        "Cartouche d'encre pour Traceur EPSON SURECOLOR SC-T5000 36 A0+ (A 0) (consommation papier c a d nombre de salariés de production)",
        "Sucre pour café (salariés)",
        "Sucre pour thé (salariés)",
        "Emballage pour transport et protection",
        "Serpilières",
        "Tapis de patio",
        "Sceau-essoreur pour serpilière",
        "Serpilière (avec manche) pour sceau ci-dessous",
        "Recharge serpilière (avec manche) pour sceau ci-dessous",
        ""
    ],
    commentaires: [
        "Vendo.ma \r Fournipro.ma \r 1ère année : LOT DE 4 GELS NETTOYANTS POUR LES MAINS FOREVER ALOE VERA pour 170 MAD HT (204 MAD TTC) le lot. Consommation : 2 Gels par mois (pour 8 salariés max) soit 1 Gel par mois (pour 4 salariés max)  2ème année : xévolution nombre salariés  3ème année : xévolution nombre salariés 4ème année : xévolution nombre salariés Source : https://vendo.ma/details/lot-de-4-gels-nettoyants-pour-les-mains-forever-aloe-vera-reference-sghg01-gel-desinfectant-9-ve-d7c7bbd8 source : http://www.fournipro.ma/services-generaux/hygiene/lot-de-4-gels-nettoyants-pour-les-mains-forever-aloe-vera.html"
    ]

}