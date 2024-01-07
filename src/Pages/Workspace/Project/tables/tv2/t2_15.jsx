import Table_v2 from "../customTables/table_v2";
import dt2 from "./dataT2";
const num = 26;
const T2_15 = () => {
  return (
    <div>
      <Table_v2
        key={1}
        table={`t2_${num}`}
        currentList={dt2[`dataTV2_${num}`]}
        hd={["4461 Associés - capital à rembourser"]}
        title="Apurement Compte courant d'Associés créditeurs-réduction de capital-  issu du Bilan d'ouverture"
      />
    </div>
  );
};
export default T2_15;
