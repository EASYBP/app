import Table_v2 from "../customTables/table_v2";
import dt2 from "./dataT2";
const num = 29;
const T2_18 = () => {
  return (
    <div>
      <Table_v2
        key={1}
        table={`t2_${num}`}
        currentList={dt2[`dataTV2_${num}`]}
        hd={["4481 Dettes sur acquisitions d'immobilisations"]}
        title="Apurement Dettes sur acquisitions d'immobilisations issues du Bilan d'ouverture "
      />
    </div>
  );
};
export default T2_18;
