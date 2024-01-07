import React from "react";
import Table_v3_2 from "../customTables/table_v3_2";


import { tables113 } from "./t113";
const tables114 = [
  '61211 Achats de matières premières A',
  '61212 Achats de matières premières B',
  '6122 Achats de matières et fournitures consommables',
  "6123 Achats d'emballages",
  "6124 Variation des stocks de matières et fournitures",
  "6125 Achats non stockés de matières et fournitures",
  "6126 Achats de travaux, études et prestations de service",
  "6128 Achats de matières et de fournitures des exercices antérieurs",
  "6129 Rabais, remises et ristournes obtenus sur achats consommés de matières et fournitures"
];
const T115 = () => {

  return (
      <Table_v3_2
          title="Paramètres Achats revendus de marchandises 1"
          start={25}
        
          tables={tables114}
          decompose
        redIndex={[20]}
          sumTitle="Achats revendus de marchandises"     />
  );
};

export default T115;
