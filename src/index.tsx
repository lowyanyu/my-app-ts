import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import UserList from './user/UserList';
import UserForm from './user/UserForm';
import UserInfo from './user/UserInfo';
import { UserStoreProvider } from './user/store';
import Counter from './counter/Counter';

ReactDOM.render(
  <React.StrictMode>
    <div style={{padding: '10px'}}>
      <Counter />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} >
            <Route path="user" element={
              <UserStoreProvider>
                <Outlet />
              </UserStoreProvider>
            }>
              <Route index element={<UserList />} />
              <Route path="add" element={<UserForm />} />
              <Route path=":userId" element={<UserInfo />} />
            </Route>
            <Route path="*" element={
              <main>
                <p>Page not found!</p>
              </main>
            } />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
