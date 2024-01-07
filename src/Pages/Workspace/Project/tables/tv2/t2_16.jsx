import Table_v2 from "../customTables/table_v2";
import dt2 from "./dataT2";
const num = 27;
const T2_16 = () => {
  return (
    <div>
      <Table_v2
        key={1}
        table={`t2_${num}`}
        currentList={dt2[`dataTV2_${num}`]}
        hd={["4464 Associés - opérations faites en commun"]}
        title="Apurement Associés créditeurs - opérations faites en commun issus du Bilan d'ouverture "
      />
    </div>
  );
};
export default T2_16;
