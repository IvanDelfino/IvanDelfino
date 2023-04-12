import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const MenuBarra = () => {
  const nav = useNavigate();
  const toExperience = () => {
    nav("/experience");
  };
  const toContact = () => {
    nav("/contact");
  };
  const toHome = () => {
    nav("/");
  };
  return (
    <>
      <AppBar component="nav">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            onClick={toHome}
          >
            Hey!
          </Typography>
          <Button color="inherit" onClick={toExperience}>
            My experience
          </Button>
          <Button color="inherit" onClick={toContact}>
            Contact me!
          </Button>
        </Toolbar>
      </AppBar>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default MenuBarra;
