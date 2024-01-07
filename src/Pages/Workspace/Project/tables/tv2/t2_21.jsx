import Table_v2 from "../customTables/table_v2";
import dt2 from "./dataT2";
const num = 32;
const T2_21 = () => {
  return (
    <div>
      <Table_v2
        key={1}
        table={`t2_${num}`}
        currentList={dt2[`dataTV2_${num}`]}
        hd={["4485 Obligations, coupons à payer (intérêts)"]}
        title="Apurement Obligations, coupons à payer (intérêts) issus du Bilan d'ouverture "
      />
    </div>
  );
};
export default T2_21;
