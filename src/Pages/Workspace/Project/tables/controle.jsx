import { getValSpecialT12, getValSpecialT13 } from "./factoring";

export const controleT6T7 = ({ state }) => {
  const t6Total = state.t6.map((t) => t.value).reduce((a, b) => a + b);
  const t7Total = state.t7.map((t) => t.value).reduce((a, b) => a + b);
  return t6Total - t7Total;
};

export const controleT12T13 = ({ state }) => {
  const t12Total = state.t6
    .map((t) => getValSpecialT12({ item: t, state }))
    .reduce((a, b) => a + b);
  const t13Total = state.t7
    .map((t) => getValSpecialT13({ item: t, state }))
    .reduce((a, b) => a + b);
  return t12Total - t13Total;
};
