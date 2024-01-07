import Table_v3_2 from "../customTables/table_v3_2";
import { start109, tables109 } from "./t109";

const T110 = () => {

  return (
      <Table_v3_2
      title="Paramètres Autres produits d'exploitation 1"
      start={start109}
      tables={tables109}
      redIndex={[4]}
      sumTitle="Autres produits d’exploitation"
      />
  );
};

export default T110;
