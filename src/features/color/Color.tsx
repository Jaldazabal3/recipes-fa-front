import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';

import {
  toggle,
  selectColor
} from './colorSlice';

export function Color() {
  const color = useSelector(selectColor);
  const dispatch = useDispatch();

  return (
    <div style= {{color: color}} >
      <h1> Title!!!</h1>
      <Button variant="contained" onClick={() => dispatch(toggle())}> Click me! </Button>
    </div>
  )

}

export default Color;
