import Table_v2 from "../customTables/table_v2";
import dt2 from "./dataT2";

const T2_9 = () => {
  return (
    <div>
      <Table_v2
        key={1}
        table={"t2_12"}
        hd={["4432 Rémunérations dues au personnel"]}
        currentList={dt2.dataTV2_12}
        title="Apurement des dettes personnel et personnel débiteur issues du Bilan d'ouverture "
      />
      <Table_v2
        table={"t2_13"}
        key={2}
        hd={[
          "Autres Dettes Personnel (hors charges à payer et provision CP)",
          "4433 Dépôts du personnel créditeurs",
          "4434 Oppositions sur salaires",
          "4438 Personnel - autres créditeurs",
        ]}
        currentList={dt2.dataTV2_13}
      />
      <Table_v2
        key={3}
        table={"t2_14"}
        hd={[
          "Créances personnel  / Personnel débiteur ",
          "3431 Avances et acomptes au personnel",
          "3438 Personnel - autres débiteurs",
        ]}
        currentList={dt2.dataTV2_14}
      />
    </div>
  );
};
export default T2_9;
