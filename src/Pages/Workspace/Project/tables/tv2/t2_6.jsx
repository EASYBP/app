import Table_v2 from "../customTables/table_v2";
import dt2 from "./dataT2";
const T2_6 = () => {
  return (
    <div>
      <Table_v2
        key={1}
        table={"t2_9"}
        currentList={dt2.dataTV2_9}
        hd={["3481 Créances sur cessions d'immobilisations"]}
        title="Apurement Créances sur cession d'immobilisation issues du Bilan d'ouverture "
      />
    </div>
  );
};
export default T2_6;
