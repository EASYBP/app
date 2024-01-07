import Table_v2 from "../customTables/table_v2";
import dt2 from "./dataT2";
const T2_5 = () => {
  return (
    <div>
      <Table_v2
        key={1}
        table={"t2_8"}
        currentList={dt2.dataTV2_8}
        hd={["3464 Associés débiteurs - opérations faites en commun"]}
        title="Apurement Associés débiteurs - opérations faites en commun issus du Bilan d'ouverture "
      />
    </div>
  );
};
export default T2_5;
