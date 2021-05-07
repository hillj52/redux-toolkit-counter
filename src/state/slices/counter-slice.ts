import { CaseReducer, createSlice, Action } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
  isVisible: boolean;
}

const initialState: CounterState = {
  value: 0,
  isVisible: true,
};

const increment: CaseReducer<CounterState, Action> = (state) => {
  state.value++;
};

const decrement: CaseReducer<CounterState, Action> = (state) => {
  state.value--;
};

const toggleCounter: CaseReducer<CounterState, Action> = (state) => {
  state.isVisible = !state.isVisible;
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment,
    decrement,
    toggleCounter,
  },
});

export default counterSlice;
