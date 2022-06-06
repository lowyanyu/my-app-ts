import './App.css';
import Table from './components/Table';
import user from './user.json';
import { useContext, useEffect, useReducer, useRef, useState } from 'react';
import { User } from './model/user.model';
import { ThemeContext } from './contexts/ThemeContext';
import MenuPage from './components/MenuPage';
import { StoreContext, StoreProvider } from './stores/UserStore';

function UserForm() {
  const {state, dispatch} = useContext(StoreContext);
  const userForm = useRef<HTMLFormElement>(null);

  useEffect(() => {
    userForm.current?.reset();
  });

  return (
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
  )

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
    }
  }
}

function App() {
  const [dark, setDark] = useState(false);

  return (
    <ThemeContext.Provider value={dark}>
      <StoreProvider>
        <MenuPage />
        <div style={{padding: '20px'}}>
          <button onClick={() => setDark(!dark)}>Switch to {dark ? 'Light' : 'Dark'}</button>
          <div>
            <h2>使用者清單</h2>
            <Table />
          </div>
          <div>
            <h2>新增使用者</h2>
            <UserForm />
          </div>
        </div>
      </StoreProvider>
    </ThemeContext.Provider>
  );
}

export default App;
