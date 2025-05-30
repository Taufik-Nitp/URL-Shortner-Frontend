import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { colors } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate= useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <a href="/">URL Shortner</a>
          </Typography>
          <Button color="inherit" onClick={()=>navigate("/login")}>Login</Button>
          <Button color="inherit" onClick={()=>{
            localStorage.removeItem("jwttoken")
            navigate("/login")
          }}>Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
