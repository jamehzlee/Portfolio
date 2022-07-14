import { createTheme } from "@mui/material";

const theme = createTheme();

theme.typography.h1 = {
  fontSize: 36,
  [theme.breakpoints.up("md")]: {
    fontSize: 40,
  },
};

theme.typography.body1 = {
  fontSize: 18,
  [theme.breakpoints.up("md")]: {
    fontSize: 28,
  },
};

export default theme;
