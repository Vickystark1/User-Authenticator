import { Link } from "react-router-dom";
import { isAuthenticated } from "../services/Auth";
import "./NavBar.css";

import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material";

const drawerWidth = 240;
const navItems = ["Register", "Login", "Dashboard", "Logout"];

export default function NavBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <a className="navbar-brand" href="#" style={{ textDecoration: "none" }}>
        <Typography variant="h6" sx={{ my: 2 }} >
          User Authenticator
        </Typography>
      </a>
      {/* <a  className="navbar-brand" href="#" ><h6>User Authenticator</h6></a> */}

      <Divider />
      <List style={{ color: "black" }}>
        {!isAuthenticated() ? (
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText>
                <Link className="nav-link" to="/"style={{color:"black"}} >
                  Register
                </Link>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ) : null}
        {!isAuthenticated() ? (
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText>
                <Link className="nav-link" to="/login" >
                  Loginstyle={{color:"black"}}
                </Link>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ) : null}
        {isAuthenticated() ? (
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText>
                <Link className="nav-link" to="/dashboard"style={{color:"black"}} >
                  Dashboard
                </Link>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ) : null}
        {isAuthenticated() ? (
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText>
                <a
                  className="nav-link"
                  onClick={props.logoutUser}
                  style={{ cursor: "pointer",color:"black" }}
                >
                  Logout
                </a>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ) : null}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar component="nav">
          <Toolbar style={{display:"flex",justifyContent:"space-between"}}>
         
          <Typography
              color="inherit"
              variant="h6"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
              style={{ justifyContent: "start" }}
             >
              User Authenticator
            </Typography>
            {/* <h1>User Authenticator</h1> */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{  display: { sm: "none" }, }}
              style={{ justifyContent: "end" }}
            >
              <MenuIcon />
            </IconButton>
            
            <Typography
              variant="h6"
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
             >
              User Authenticator
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {!isAuthenticated() ? (
                <Button sx={{ color: "#fff" }}>
                  <Link className="nav-link" style={{ color: "white" }} to="/">
                    Register
                  </Link>
                </Button>
              ) : null}
              {!isAuthenticated() ? (
                <Button sx={{ color: "#fff" }}>
                  <Link
                    className="nav-link"
                    style={{ color: "white" }}
                    to="/login"
                  >
                    Login
                  </Link>
                </Button>
              ) : null}
              {isAuthenticated() ? (
                <Button sx={{ color: "#fff" }}>
                  <Link
                    className="nav-link"
                    style={{ color: "white" }}
                    to="/dashboard"
                  >
                    Dashboard
                  </Link>
                </Button>
              ) : null}
              {isAuthenticated() ? (
                <Button sx={{ color: "#fff" }}>
                  <a
                    className="nav-link"
                    onClick={props.logoutUser}
                    style={{ cursor: "pointer", color: "white" }}
                  >
                    Logout
                  </a>
                </Button>
              ) : null}
            </Box>
          </Toolbar>
        </AppBar>
        
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
          {/* <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique unde
          fugit veniam eius, perspiciatis sunt? Corporis qui ducimus quibusdam,
          aliquam dolore excepturi quae. Distinctio enim at eligendi perferendis in
          cum quibusdam sed quae, accus
        </Typography> */}
        </Box>
        
      </Box>
    </div>
  );
}

NavBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
