import React from "react";
import Table_v3_2 from "../customTables/table_v3_2";
import { tables123 } from "./t123";
import { start123 } from "./t123";


const T124 = () => {

  return (
      <Table_v3_2
          title="Paramètres Impôts et taxes 2"
          start={start123}
        
          tables={tables123}
          sumTitle="Autres charges d’exploitation"
         // decompose
          redIndex={[4]}    />
  );
};

export default T124;