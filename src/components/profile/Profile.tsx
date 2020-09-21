import React from 'react';
import { Container } from '@material-ui/core';
import { Highlight } from '../';
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from '../loading/Loading';

const Profile = () => {

  const { user } = useAuth0();
  const { name, picture, email } = user;

  return (
    <div>
      <Container>
        <img
          src={picture}
          alt="Profile"
          className="rounded-circle img-fluid profile-picture"  
        />
        <h2>{name}</h2>
        <p className="lead text-muted">{email}</p>
        <Highlight>{JSON.stringify(user, null, 2)}</Highlight>
      </Container>
    </div>
  )
}

export default withAuthenticationRequired(Profile, {
  onRedirecting: () => <Loading />
})