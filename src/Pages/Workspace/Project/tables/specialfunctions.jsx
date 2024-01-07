const filterValue = (list, compte) => {
  const filter = list.filter((f) => f.num === compte)[0];
  return filter ? filter.value : 0.0;
};

export const t12_3428 = (state) => {
  const val1 = filterValue(state.t6, 3428);
  const val2 = filterValue(state.t9, 3428);
  const val3 = filterValue(state.t11, 3428);
  const val4 = filterValue(state.t6, 3482);
  const val5 = filterValue(state.t9, 3482);
  const val6 = filterValue(state.t11, 3482);

  return val1 + val2 - val3 + (val4 + val5 - val6);
};

export const getColorCell = (item) => {
  if (item.background) {
    return item.background;
  } else
    switch (item.p) {
      case 1:
        return "rgb(253, 233, 217)";
      case 2:
        return "rgb(49, 133, 155)";
      case 3:
        return "rgb(51, 51, 51)";
      default:
        return null;
    }
};
