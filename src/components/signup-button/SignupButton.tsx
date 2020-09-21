import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Box } from '@material-ui/core';

export default function SignupButton() {
  const { loginWithRedirect } = useAuth0();

  const signup = () => {
    loginWithRedirect({
      screen_hint: 'signup'
    });
  }

  return (
    <Box component="div" m={2}>
      <Button
        onClick={signup}
        variant="contained"
      >
        Log In
      </Button>
    </Box>
  )
}
