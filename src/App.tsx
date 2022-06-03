import './App.css';
import Table from './components/Table';
import user from './user.json';
import { useContext, useEffect, useReducer, useRef, useState } from 'react';
import { User } from './model/user.model';
import { ThemeContext } from './contexts/ThemeContext';
import MenuPage from './components/MenuPage';
import { StoreContext, StoreProvider } from './stores/UserStore';

function App() {
  // const [userList, setUserList] = useState(user);
  // const [newUser, setNewUser] = useState<User | null>(null);
  // const [userList, dispatch] = useReducer(reducer, []);
  const {state, dispatch} = useContext(StoreContext);

  const [dark, setDark] = useState(false);
  const userForm = useRef<HTMLFormElement>(null);

  // const fetchUserList = async () => {
  //   await fetch('http://localhost:3000/user.json')
  //     .then(response => response.json())
  //     .then(data => setUserList(data));
  // }
  useEffect(() => {
    userForm.current?.reset();
  });

  // useEffect(() => {
  //   if (newUser !== null) {
  //     // 假設真實情況下，這裡就會去打 API 更新 userList 的資料
  //     // fetchUserList();
  //     setUserList([...userList, newUser]);
  //   }
  // }, [newUser]); // dependecies: 「組件渲染完後，如果 dependencies 有改變，才會呼叫 useEffect 內的 function」

  /** 
   * 這裡會 warning missing dependency: userList
   * 原因是因為在 useEffect 中使用到了 userList 的值
   * 但卻沒有列在 dependencies 中
   * 這可能讓 userList 沒辦法適時的重新被更新而產生問題
   */ 

  return (
    <StoreProvider>
    {/* <ThemeContext.Provider value={dark}> */}
      <MenuPage />
      <div style={{padding: '20px'}}>
        {/* <button onClick={() => setDark(!dark)}>Switch to {dark ? 'Light' : 'Dark'}</button> */}
        <div>
          <h2>使用者清單</h2>
          <Table />
        </div>
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
            <div style={{marginTop: '10px'}}>
              {/* <button type="button" onClick={e => submitForm(e)}>Submit</button> */}
              <button type="button" onClick={submit}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    {/* </ThemeContext.Provider> */}
    </StoreProvider>
  );

  /*
  function submitForm(e: any): void {
    const form = e.target.form;
    setNewUser({
			userId: form.userId.value,
			userAccount: form.userAccount.value,
			userName: form.userName.value
    });
    // 假設真實情況下，這裡就會去打 API 新增使用者
    form.reset();
	}
  */

  function submit(): void {
    if (userForm.current) {
      const form = userForm.current;
      const userVal = {
        userId: form.userId.value,
        userAccount: form.userAccount.value,
        userName: form.userName.value
      };
      dispatch({
        type: 'add',
        data: userVal
      });
      // setNewUser({
      //   userId: form.userId.value,
      //   userAccount: form.userAccount.value,
      //   userName: form.userName.value
      // });
    }
  }
}

export default App;
