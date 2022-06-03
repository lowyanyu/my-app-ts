import { User } from '../model/user.model';

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
  Create = "CREATE_PRODUCT",
  Delete = "DELETE_PRODUCT",
  Add = "ADD_PRODUCT"
}

// Product

type ProductType = {
  id: number;
  name: string;
  price: number;
};

type ProductPayload = {
  [Types.Create]: {
    id: number;
    name: string;
    price: number;
  };
  [Types.Delete]: {
    id: number;
  };
};

export type ProductActions = ActionMap<ProductPayload>[keyof ActionMap<
  ProductPayload
>];

export const reducer = (state: User[], action: {type: string, data: User}): User[] => {
  switch (action.type) {
    case 'add':
      console.log('add');  
      return [...state, action.data];
    case 'delete':
      console.log('delete');
      return [
        ...state.filter(user => user.userId !== action.data.userId),
      ];
    default:
      throw new Error();
  }
}