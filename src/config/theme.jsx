import { createTheme } from "@mui/material/styles";
import { amber } from "@mui/material/colors";
const test2 = "#fa504b";
export const THEME = createTheme({
  palette: {
    primary: {
      main: test2,
    },
    info: {
      main: amber[500],
    },
  },
});
