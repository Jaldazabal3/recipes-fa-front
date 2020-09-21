import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
} from '@material-ui/core';

import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../logout-button/LogoutButton";
import LoginButton from "../login-button/LoginButton";

export default function NavBar() {
  const { isAuthenticated } = useAuth0();

  return (
    <AppBar position="static">
      <Toolbar>
        {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      </Toolbar>
    </AppBar>
  );
}