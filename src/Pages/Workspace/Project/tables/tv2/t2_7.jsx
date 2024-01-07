import Table_v2 from "../customTables/table_v2";
import dt2 from "./dataT2";
const num = 10;
const T2_7 = () => {
  return (
    <div>
      <Table_v2
        key={1}
        table={`t2_${num}`}
        currentList={dt2[`dataTV2_${num}`]}
        hd={["3488 Divers débiteurs"]}
        title="Apurement Autres débiteurs hors Créances sur cession d'immobilisation issus du Bilan d'ouverture "
      />
    </div>
  );
};
export default T2_7;
