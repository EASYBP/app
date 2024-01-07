import Table_v2 from "../customTables/table_v2";
import dt2 from "./dataT2";
const num = 31;
const T2_20 = () => {
  return (
    <div>
      <Table_v2
        key={1}
        table={`t2_${num}`}
        currentList={dt2[`dataTV2_${num}`]}
        hd={["4484 Obligations échues à rembourser "]}
        title="Apurement Obligations échues à rembourser issues du Bilan d'ouverture "
      />
    </div>
  );
};
export default T2_20;
