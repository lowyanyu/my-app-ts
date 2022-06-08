import { useContext, useEffect, useRef } from 'react';
import { UserStoreContext } from "./store";
import { Types } from "./reducer";
import { useNavigate } from 'react-router-dom';

const UserForm = () => {
  const {dispatch} = useContext(UserStoreContext);
  const userForm = useRef<HTMLFormElement>(null);
  const navigate = useNavigate();

  const addUser = () => {
    const userId = parseInt(userForm.current?.userId.value)
    if (isNaN(userId)) {
      alert('新增使用者失敗，userId must be a valid number');
      return;
    }
    dispatch({
      type: Types.Add,
      payload: {
        userId: userId,
        userAccount: userForm.current?.userAccount.value ?? '',
        userName: userForm.current?.userName.value ?? ''
      }
    });
    alert('新增使用者成功！');
    navigate('/user');
  };

  useEffect(() => {
    userForm.current?.reset();
  });

  return (
    <div>
      <h2>新增使用者</h2>
      <form id="form" ref={userForm}>
        <div>
          <label htmlFor="userId">ID: </label>
          <input id="userId"/>
        </div>
        <div>
          <label htmlFor="userAccount">帳號: </label>
          <input id="userAccount"/>
        </div>
        <div>
          <label htmlFor="userName">名稱: </label>
          <input id="userName"/>
        </div>
        <div>
          <button type="button" onClick={addUser}>新增</button>
        </div>
      </form>
    </div>
  )
};

export default UserForm;