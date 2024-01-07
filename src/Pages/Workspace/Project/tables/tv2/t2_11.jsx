import Table_v2 from "../customTables/table_v2";
import dt2 from "./dataT2";

const T2_11 = () => {
  return (
    <div>
      <Table_v2
        key={1}
        table={"t2_18"}
        hd={[
          "Dettes Etat Taxe-Dettes fiscales (les charges à payer et provisions incluses) (hors IS, TVA et IR)",
          "4452 Etat Impôts, taxes et assimilés",
          "4457 Etat, impôts et taxes à payer",
        ]}
        currentList={dt2.dataTV2_18}
        title="Apurement des dettes organismes sociaux et organismes sociaux débiteurs issues du Bilan d'ouverture"
      />
      <Table_v2
        table={"t2_19"}
        key={2}
        hd={["4458 Etat - autres comptes créditeurs"]}
        currentList={dt2.dataTV2_19}
      />
      <Table_v2
        key={3}
        table={"t2_20"}
        hd={["3458 Etat - autres comptes débiteurs"]}
        currentList={dt2.dataTV2_20}
      />
    </div>
  );
};
export default T2_11;
