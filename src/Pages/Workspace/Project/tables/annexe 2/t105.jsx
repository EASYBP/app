import React from "react";
import Table_v3_2 from "../customTables/table_v3_2";
const start105 = 13;
const tableName = "Paramètres Variation de stocks de produits 1";
const sumTitle="Variation de stocks de produits"
const tables105 = [
  "7131 Variation des stocks de produits en cours",
  "7132 Variation des stocks de biens produits",
  "7133 Variation des stocks de produits intermédiaires et résiduels"

];

//const end=15

const T105 = () => {

  return (
      <Table_v3_2
      allNull
      title={tableName}
      tables={tables105}
      sumTitle={sumTitle}
      />
  );
};

export default T105;
