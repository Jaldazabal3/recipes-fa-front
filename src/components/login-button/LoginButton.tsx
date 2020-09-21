import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Box } from '@material-ui/core';

export default function LoginButton() {
  const { loginWithRedirect } = useAuth0();
  
  return (
    <Box component="div" m={2}>
      <Button
        onClick={() => loginWithRedirect()}
        variant="contained"
      >
        Log In
      </Button>
    </Box>
  )
}
