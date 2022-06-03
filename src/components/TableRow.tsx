import './TableRow.css';
import { User } from "../model/user.model";
import { useContext } from 'react';
import { StoreContext } from '../stores/UserStore';

function TableEvenRow(props: {user: User, darkTheme: boolean}) {
  const user = props.user;
  const dark = props.darkTheme;
  const {state, dispatch} = useContext(StoreContext);

  return (
    <tr className={'Table-even-row' + (dark ? '--dark' : '')}>
      <td>{user.userId}</td>
      <td>{user.userAccount}</td>
      <td>{user.userName}</td>
      <td><button type='button' onClick={() => dispatch({type: 'delete', data: user})}>刪除</button></td>
    </tr>
  )
}

function TableOddRow(props: {user: User, darkTheme: boolean}) {
  const user = props.user;
  const dark = props.darkTheme;
  const {state, dispatch} = useContext(StoreContext);

  return (
    <tr className={'Table-odd-row' + (dark ? '--dark' : '')}>
      <td>{user.userId}</td>
      <td>{user.userAccount}</td>
      <td>{user.userName}</td>
      <td><button type='button' onClick={() => dispatch({type: 'delete', data: user})}>刪除</button></td>
    </tr>
  )
}

export { TableEvenRow, TableOddRow };