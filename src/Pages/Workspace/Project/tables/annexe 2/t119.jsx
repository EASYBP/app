import React from "react";
import Table_v3_2 from "../customTables/table_v3_2";
import { tables118 } from "./t118";
import { start118 } from "./t118";


const T119 = () => {

  return (
      <Table_v3_2
          title="Paramètres Impôts et taxes 2"
          start={start118}
        
          tables={tables118}
          decompose
          redIndex={[20]}    />
  );
};

export default T119;