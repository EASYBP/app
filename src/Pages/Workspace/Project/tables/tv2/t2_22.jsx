import Table_v2 from "../customTables/table_v2";
import dt2 from "./dataT2";
const num = 33;
const T2_22 = () => {
  return (
    <div>
      <Table_v2
        key={1}
        table={`t2_${num.toString()}`}
        currentList={dt2[`dataTV2_${num.toString()}`]}
        hd={[
          "Divers créanciers : ",
          "4487 Dettes rattachées aux autres créanciers",
          "4488 Divers créanciers",
        ]}
        title="Apurement Divers créanciers issus du Bilan d'ouverture  "
      />
    </div>
  );
};
export default T2_22;
