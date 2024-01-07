import Table_v2 from "../customTables/table_v2";
import dt2 from "./dataT2";

const T2_13 = () => {
  return (
    <div>
      <Table_v2
        key={1}
        table={"t2_23"}
        hd={["4454 Etat, IR / (salaires, dividende,…)"]}
        currentList={dt2.dataTV2_23}
        title="Apurement des dettes d'Impôts sur les revenus et créances d'impôts sur les revenus issues du Bilan d'ouverture "
      />
      <Table_v2
        table={"t2_24"}
        key={2}
        hd={["3457 Etat - créance IR / (salaires, dividende,…)"]}
        currentList={dt2.dataTV2_24}
      />
    </div>
  );
};
export default T2_13;
