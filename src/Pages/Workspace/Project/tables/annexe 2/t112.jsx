import Table_v3_2 from "../customTables/table_v3_2";
import { start111, tables111 } from "./t111";

const T112 = () => {

  return (
      <Table_v3_2
      title="Paramètres Achats revendus de marchandises 1"
      start={start111}
      tables={tables111}
      redIndex={[3]}
      sumTitle="Achats revendus de marchandises"
      />
  );
};

export default T112;
