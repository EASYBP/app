import { useSelector } from "react-redux";
import { MyMaterial } from "./materialTable";
import { columnsT3 } from "./t3";

const T4 = () => {
  const data1 = useSelector((state) => state.project.t1).map((d) =>
    Object.assign({}, d)
  );
  const data2 = useSelector((state) => state.project.t2).map((d) =>
    Object.assign({}, d)
  );

  return (
    <div>
      <Table title={"Charges"} data={data1.filter((d) => d.pf !== "X")} />
      <div className="my-5"></div>
      <Table title={"Produits"} data={data2.filter((d) => d.pf !== "X")} />
    </div>
  );
};

export default T4;

const Table = ({ data, title }) => {
  return (
    <MyMaterial
      title={title}
      rowStyle={(rowData) => ({
        fontSize: 12,
      })}
      data={data.map((d) => Object.assign({}, d))}
      columns={columnsT3}
    />
  );
};
