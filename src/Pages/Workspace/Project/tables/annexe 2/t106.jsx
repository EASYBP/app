import React from "react";
import Table_v3_2 from "../customTables/table_v3_2";
const tableName = "Paramètres Immobilisations produites par l'entreprise pour elle-même 1";
const sumTitle="Immobilisations produites par l'entreprise pour elle-même"
const tables106 = [
  "7141 Immobilisation en non valeurs produite",
  "7142 Immobilisations incorporelles produites",
  "7143 Immobilisations corporelles produites",
  "7148 Immobilisations produites des exercices antérieurs"
];

//const end=19

const T106 = () => {

  return (
      <Table_v3_2
      allNull
      title={tableName}
      tables={tables106}
      redIndex={[1,2,3]}
      sumTitle={sumTitle}
      />
  );
};

export default T106;
