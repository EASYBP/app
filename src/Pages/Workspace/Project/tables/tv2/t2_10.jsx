import Table_v2 from "../customTables/table_v2";
import dt2 from "./dataT2";

const T2_10 = () => {
  return (
    <div>
      <Table_v2
        key={1}
        table={"t2_15"}
        hd={["4441 Caisse Nationale de la Sécurité Sociale"]}
        currentList={dt2.dataTV2_15}
        title="Apurement des dettes organismes sociaux et organismes sociaux débiteurs issues du Bilan d'ouverture"
      />
      <Table_v2
        table={"t2_16"}
        key={2}
        hd={[
          "Autres Dettes Sociales (hors charges à payer et provision CS sur CP)",
          "4443 Caisses de retraite",
          "4445 Mutuelles",
          "4448 Autres organismes sociaux",
        ]}
        currentList={dt2.dataTV2_16}
      />
      <Table_v2
        key={3}
        table={"t2_17"}
        hd={[
          "3458 Etat - autres comptes débiteurs (cf. Tableau Apurement Dette Etat Taxe OPS)",
        ]}
        currentList={dt2.dataTV2_17}
      />
    </div>
  );
};
export default T2_10;
