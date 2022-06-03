import user from '../user.json';
import { User } from '../model/user.model';
import React, { createContext, useReducer } from 'react';
import { reducer } from "../reducers/UserReducer";

const initialState = user;

export const StoreContext = createContext<{
  state: User[];
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null
});

export const StoreProvider = (props: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log([state, dispatch]);

  return (
    <StoreContext.Provider value={{state, dispatch}}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default reducer;