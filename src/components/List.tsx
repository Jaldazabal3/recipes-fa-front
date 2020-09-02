import React, { Component } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';

export class List extends Component {

  getUser = async() => {
    await axios.get('https://api.github.com/users/Jaldazabal3').then(response => {
      console.log('RESPUESTAAA-----', response);
    });
  }


  render() {
    return (
      <div>
        <Button variant="contained" onClick={this.getUser}>Get data</Button>
      </div>
    )
  }
}

export default List
