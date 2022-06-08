import user from '../user.json';
import { User } from './user.model';
import { createContext, useReducer, Dispatch } from 'react';
import { userReducer } from "./reducer";

const initialState = user;

export const UserStoreContext = createContext<{
  state: User[];
  dispatch: Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null
});

export const UserStoreProvider = (props: any) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserStoreContext.Provider value={{state, dispatch}}>
      {props.children}
    </UserStoreContext.Provider>
  );
};