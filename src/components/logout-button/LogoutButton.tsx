import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Box } from '@material-ui/core';

export default function LogoutButton() {
  const { logout } = useAuth0();

  const logoutClick = () => {
    logout({
      returnTo: window.location.origin
    });
  }

  return (
    <Box component="div" m={2}>
      <Button
        onClick={logoutClick}
        variant="contained"
        color="secondary"
      >
        Log Out
      </Button>
    </Box>
  )
}
