// src/reducer.js
const initialState = {
    counter: 0
  };
  
  export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return { counter: state.counter + 1 };
      case 'DECREMENT':
        return { counter: state.counter - 1 };
      default:
        return state;
    }
  };
  