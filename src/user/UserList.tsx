import { useContext } from 'react';
import { UserStoreContext } from "./store";
import { Types } from "./reducer";
import { Table, TableHeader, TableBody } from "../shared/Table";
import { Link, useNavigate } from 'react-router-dom';

const UserTable = () => {
  const {state, dispatch} = useContext(UserStoreContext);
  
  const deleteUser = (userId: number) => {
    dispatch({
      type: Types.Delete,
      payload: {
        userId: userId
      }
    });
    alert("刪除使用者成功！");
  };

  return (
    <Table>
      <TableHeader data={
        ['ID', '帳號', '名稱', '']
      } />
      <TableBody data={
        state.map(user => {
          return (
            <>
              <td>{user.userId}</td>
              <td>{user.userAccount}</td>
              <td>{user.userName}</td>
              <td><button type="button" onClick={() => deleteUser(user.userId)}>刪除</button></td>
              <td><Link to={'/user/' + user.userId}><button type="button">資訊</button></Link></td>
            </>
          )
        })
      } />
    </Table>
  )
};

const UserList = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <h2>使用者清單</h2>
        <button type="button" onClick={() => navigate('/user/add')}>新增使用者</button>
        <UserTable />
      </div>
    </div>
  )
};

export default UserList;