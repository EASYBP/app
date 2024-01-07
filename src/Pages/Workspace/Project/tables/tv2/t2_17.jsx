import Table_v2 from "../customTables/table_v2";
import dt2 from "./dataT2";
const num = 28;
const T2_17 = () => {
  return (
    <div>
      <Table_v2
        key={1}
        table={`t2_${num}`}
        currentList={dt2[`dataTV2_${num}`]}
        hd={["4465 Associés - dividendes à payer"]}
        title="Apurement Compte courant d'Associés créditeurs-Dividendes à payer- issu du Bilan d'ouverture"
      />
    </div>
  );
};
export default T2_17;
