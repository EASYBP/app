import { useSelector } from "react-redux";
import { checkColumn, titleColumn } from "./constante";

import { MyMaterial } from "./materialTable";
export const columnsT3 = [
  titleColumn(),
  checkColumn("1"),
  checkColumn("2"),
  checkColumn("3"),
  checkColumn("4"),
];

const T3 = () => {
  const data1 = useSelector((state) => state.project.t1).map((d) =>
    Object.assign({}, d)
  );
  const data2 = useSelector((state) => state.project.t2).map((d) =>
    Object.assign({}, d)
  );

  return (
    <div>
      <Table title={"Emplois"} data={data1.filter((d) => d.pf === "X")} />
      <div className="my-5"></div>
      <Table title={"Ressources"} data={data2.filter((d) => d.pf === "X")} />
    </div>
  );
};

export default T3;

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
