import Table_v2 from "../customTables/table_v2";
import dt2 from "./dataT2";

const T2_4 = () => {
  return (
    <div>
      <Table_v2
        key={1}
        table={"t2_6"}
        hd={[
          "4463 Comptes courants des associés créditeurs",
          "4468 Autres comptes d'associés - créditeurs",
        ]}
        currentList={dt2.dataTV2_6}
        title="Apurement Comptes courants d'Associés créditeurs et débiteurs issus du Bilan d'ouverture "
      />
      <Table_v2
        table={"t2_7"}
        key={2}
        hd={[
          "3463 Comptes courants des associés débiteurs",
          "3467 Créances rattachées aux comptes d'associés",
          "3468 Autres comptes d'associés débiteurs",
        ]}
        currentList={dt2.dataTV2_7}
      />
    </div>
  );
};
export default T2_4;
