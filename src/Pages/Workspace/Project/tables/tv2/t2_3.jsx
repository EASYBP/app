import Table_v2 from "../customTables/table_v2";
import dt2 from "./dataT2";
const T2_3 = () => {
  return (
    <div>
      <Table_v2
        key={1}
        table={"t2_5"}
        currentList={dt2.dataTV2_5}
        hd={[
          "3461 Associés - comptes d'apport en société",
          "3462 Actionnaires - capital souscrit et appelé non versé",
        ]}
        title="Apurement Comptes courants d'Associés-augmentation de capital- débiteurs et créditeurs issus du Bilan d'ouverture "
      />
      <Table_v2
        key={2}
        table={"t2_34"}
        currentList={dt2.dataTV2_34}
        hd={["4462 Associés - versements reçus sur augmentation de capital"]}
      />
    </div>
  );
};
export default T2_3;
