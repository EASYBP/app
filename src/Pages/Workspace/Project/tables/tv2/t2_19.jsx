import Table_v2 from "../customTables/table_v2";
import dt2 from "./dataT2";
const num = 30;
const T2_19 = () => {
  return (
    <div>
      <Table_v2
        key={1}
        table={`t2_${num}`}
        currentList={dt2[`dataTV2_${num}`]}
        hd={["4483 Dettes sur acquisitions de titres et valeurs de placement"]}
        title="Apurement Dettes sur acquisitions de titres et valeurs de placement issues du Bilan d'ouverture "
      />
    </div>
  );
};
export default T2_19;
