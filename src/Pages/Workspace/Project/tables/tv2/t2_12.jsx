import Table_v2 from "../customTables/table_v2";
import dt2 from "./dataT2";

const T2_12 = () => {
  return (
    <div>
      <Table_v2
        key={1}
        table={"t2_21"}
        hd={["4453 Etat, impôts sur les résultats"]}
        currentList={dt2.dataTV2_21}
        title="Apurement des dettes d'Impôts sur les sociétés et des créances d'impôts sur les sociétés issues du Bilan d'ouverture"
      />
      <Table_v2
        table={"t2_22"}
        key={2}
        hd={["3453 Acomptes sur impôts sur les résultats"]}
        currentList={dt2.dataTV2_22}
      />
    </div>
  );
};
export default T2_12;
