import Table_v2 from "../customTables/table_v2";
import dt2 from "./dataT2";
const T2_8 = () => {
  return (
    <div>
      <Table_v2
        key={1}
        table={"t2_11"}
        currentList={dt2.dataTV2_11}
        hd={["4411 Fournisseurs"]}
        title="Apurement des dettes fournisseurs et fournisseurs débiteurs issues du Bilan d'ouverture "
      />
      <Table_v2
        key={2}
        table={"t2_35"}
        currentList={dt2.dataTV2_35}
        hd={[
          "Autres dettes fournisseurs (FNP incluses)",
          "4413 Fournisseurs - retenues de garantie",
          "4415 Fournisseurs - effets à payer",
          "4417 Fournisseurs - factures non parvenues",
          "4418 Autres fournisseurs et comptes rattachés",
        ]}
      />
      <Table_v2
        key={3}
        table={"t2_36"}
        currentList={dt2.dataTV2_36}
        hd={["341 Fournisseurs débiteurs, avances et acomptes (AAE inclus)"]}
      />
    </div>
  );
};
export default T2_8;
