type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      }
};

export enum Types {
  Add = "ADD_USER",
  Delete = "DELETE_USER"
}

// User
type User = {
  userId: number;
  userAccount: string;
  userName: string;
};

type UserPayload = {
  [Types.Add]: {
    userId: number;
    userAccount: string;
    userName: string;
  };
  [Types.Delete]: {
    userId: number;
  };
};

export type UserActions = ActionMap<UserPayload>[keyof ActionMap<
  UserPayload
>];

export const userReducer = (state: User[], action: UserActions): User[] => {
  switch (action.type) {
    case Types.Add:
      console.log('add');  
      return [...state, action.payload];
    case Types.Delete:
      console.log('delete');
      return [
        ...state.filter(user => user.userId !== action.payload.userId),
      ];
    default:
      throw new Error();
  }
}