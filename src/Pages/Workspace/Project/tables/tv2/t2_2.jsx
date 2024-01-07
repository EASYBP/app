import Table_v2 from "../customTables/table_v2";
import dt2 from "./dataT2";
const T2_2 = () => {
  return (
    <div>
      <Table_v2
        key={1}
        table={"t2_4"}
        currentList={dt2.dataTV2_4}
        hd={["3451 Subventions à recevoir"]}
        title="Apurement des Subventions à recevoir issues du Bilan d'ouverture"
      />
    </div>
  );
};
export default T2_2;
