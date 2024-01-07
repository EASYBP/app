import React from "react";
import Table_v3_2 from "../customTables/table_v3_2";
import { tables116 } from "./t116";
import { start116 } from "./t116";


const T117 = () => {

  return (
      <Table_v3_2
          title="Paramètres Autres achats et charges externes 2"
          start={start116}
        
          tables={tables116}
          decompose
          redIndex={[20]}
          sumTitle="Achats revendus de marchandises"     />
  );
};

export default T117;