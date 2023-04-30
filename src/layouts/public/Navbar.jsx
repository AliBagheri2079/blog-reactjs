import { HamburgerButton } from "@/components/Button";
import { LinesIcon } from "@/components/Icons";
import revealTrigger from "@/vendors/revealer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import * as React from "react";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = React.useState(false);

  const toggleDrawer = open => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    const revealAction = () => {
      // actionBtn.setAttribute("data-open", true);
      setShowNavbar(open);
    };
    const hideAction = () => {
      // actionBtn.setAttribute("data-open", false);
    };
    revealTrigger(".navbar", ".hamburger-btn", revealAction, hideAction);
  };

  const NavList = (
    <Box
      sx={{
        width: "auto",
        height: "100vh",
        overflow: "hidden",
        background: "black",
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List
        sx={{
          height: "80%",
          display: "flex",
          flexFlow: "column wrap",
          justifyContent: "space-evenly",
          mt: "10%",
        }}
      >
        {["Inbox", "Starred", "Send email", "Drafts"].map(text => (
          <ListItem
            key={text}
            //  disablePadding
          >
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <HamburgerButton
        className="hamburger-btn"
        aria-controls="hamburger-btn-navigation"
        aria-expanded={showNavbar}
        onClick={toggleDrawer(!showNavbar)}
        sx={{ zIndex: "2000" }}
        disableRipple
      >
        <LinesIcon />
      </HamburgerButton>

      <SwipeableDrawer
        className="navbar"
        anchor="top"
        open={showNavbar}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {NavList}
      </SwipeableDrawer>
    </>
  );
};

export default Navbar;
