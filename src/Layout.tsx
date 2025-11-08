import { Box } from "@mui/material";
import { Outlet } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      
      <Box component="main" sx={{ flex: 1, padding: { sm: 2 }, justifyItems: "center" }}>
        <Outlet />
      </Box>
      
      <Footer />
    </Box>
  );
};

export default Layout;