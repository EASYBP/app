import Table_v2 from "../customTables/table_v2";
import dt2 from "./dataT2";
const num = 25;
const T2_14 = () => {
  return (
    <div>
      <Table_v2
        key={1}
        table={`t2_${num}`}
        currentList={dt2[`dataTV2_${num}`]}
        hd={["4456 Etat, TVA due (suivant déclarations)"]}
        title="Apurement dettes de TVA issues du Bilan d'ouverture "
      />
    </div>
  );
};
export default T2_14;
