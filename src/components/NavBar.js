import { Link } from "react-router-dom";
import { isAuthenticated } from "../services/Auth";
import "./NavBar.css";
import * as React from "react";
import PropTypes from "prop-types";
import {AppBar,Box,CssBaseline,Divider,Drawer,IconButton,List,ListItem,ListItemButton,ListItemText,Toolbar,Typography,Button, ThemeProvider, createTheme} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { dark } from "@mui/material/styles/createPalette";
import Logoauth from '../Assets/authlogo.png';
import { Image } from "react-bootstrap";
const drawerWidth = 240;

export default function NavBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = ( 
     <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
       <Link className="navbar-brand" href="#home" style={{ textDecoration: "none" }}>
         <Typography variant="h6" sx={{ my: 2 }} >
           User Authenticator
         </Typography>
       </Link>

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
                 <Link className="nav-link" to="/login" style={{color:"black"}} >
                 Login
                 
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
                 <Link href="#logout"
                   className="nav-link"
                   onClick={props.logoutUser}
                   style={{ cursor: "pointer",color:"black" }}
                 >
                   Logout
                 </Link>
               </ListItemText>
             </ListItemButton>
           </ListItem>
        ) : null}
       </List>
     </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

    // const darkTheme = createTheme({
    //   palette: {
    //     mode: 'dark', // Set mode to 'dark' for a dark theme
    //     primary: {
    //       main: '#f48fb1', // Example primary color
    //     },
    //     secondary: {
    //       main: '#757575', // Grey color
    //     },
    //     // You can define other colors like error, warning, info, etc.
    //   },
    // });

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        {/* <ThemeProvider theme={darkTheme
         }> */}

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
             >User Authenticator
            </Typography>
          
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
            className="mx-1 mt-1"
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
                  <a href="#logout"
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
        {/* </ThemeProvider> */}
        
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
