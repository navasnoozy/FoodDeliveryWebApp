import { Box } from "@mui/material";

import { Outlet } from "react-router";
import Navbar from "./components/Navbar/Navbar";

const Layout = () => {
  return (
    <Box>
      <Box>
        <Navbar />
      </Box>

      <Box padding={{sm:2}} sx={{ justifyItems: "center" }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
