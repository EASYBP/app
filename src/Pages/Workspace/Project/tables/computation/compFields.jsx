const compFields = ({
  item,
  currentList,
  stateList,
  field,
  state,
  fromTableList,
  returnedList,
  fromLocal,
}) => {
  const checker_1 = field == "montant" || field == "value";
  if (item.space) {
    if (item.type === 3 && field == "montant") return 0;
    else return;
  }

  if (item.fromTableList) {
    if (checker_1) {
      return (fromTableList || item.fromTableList)
        .map((i) => {
          const neVal = i.ne ? -1 : 1;
          const d = state[i.table].filter((f) => f.num == i.row)[0];

          return d ? neVal * d.value : 0;
        })
        .reduce((a, b) => a + b);
    } else {
      return;
    }
  }
  if (item.fromLocal) {
    if (checker_1) {
      return (fromLocal || item.fromLocal)
        .map((i) => {
          const neVal = i.ne ? -1 : 1;
          const d = returnedList.filter((f) => f.i == i.row)[0];

          return d
            ? neVal *
                parseFloat(
                  d[field].toString().replaceAll(" ", "").replaceAll(",", ".")
                )
            : 0;
        })
        .reduce((a, b) => a + b);
    } else {
      return;
    }
  }
  if (!item.relation) {
    //FromTable
    if (item.fromTable)
      return state[item.fromTable].filter(
        (s) => s.num === item.fromNumRow || s.i == item.fromIRow
      )[0][field];

    //Special local
    if (item.specialLocal)
      return item.specialLocal
        .map((i) => {
          const neVal = i.ne ? -1 : 1;
          return (
            neVal *
            compFields({
              item: currentList[currentList.findIndex((d) => d.i == i.i)],
              stateList,
              currentList,
              state,
              field,
              fromTableList,
            })
          );
        })
        .reduce((a, b) => a + b);

    return stateList.filter((d) => d.num === item.num)[0][field];
  } else {
    if (field == "echeance") return "";
    const result = item.relation.map((e) =>
      compFields({
        item: currentList[currentList.findIndex((d) => d.i === e)],
        stateList,
        currentList,
        state,
        field,
        fromTableList,
      })
    );
    return result.length == 0 ? 0 : result.reduce((a, b) => a + b);
  }
};

export default compFields;
