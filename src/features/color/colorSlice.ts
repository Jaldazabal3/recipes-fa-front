import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../app/store";


interface ColorState {
  value: string;
}

const initialState: ColorState = {
  value: 'green',
}

export const colorSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {
    toggle: state => {
      state.value = state.value === 'green' ? 'red' : 'green'
    }
  }
});

export const { toggle } = colorSlice.actions;

export const selectColor = (state: RootState) => state.color.value;

export default colorSlice.reducer;


