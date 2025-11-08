import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#f44336",
      light: "#e57373",
      dark: "#d32f2f",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#f44336", // your color
        },
      },
    },
  },
});
