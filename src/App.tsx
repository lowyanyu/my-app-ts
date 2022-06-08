import './App.css';
import { ThemeContext } from './shared/ThemeContext';
import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function App() {
  const [dark, setDark] = useState(false);
  const navItems = ['user', 'role'];

  return (
    <ThemeContext.Provider value={{dark: dark}}>
      <nav>
        {
          navItems.map(nav => {
            return (
              <span key={nav}>
                <NavLink to={"/" + nav} style={({isActive}) => {return isActive ? {color: 'red'} : {}}}>
                  {nav.charAt(0).toUpperCase() + nav.slice(1)}
                </NavLink>
                &nbsp;&nbsp;&nbsp;
              </span>
            )
          })
        }
        <button onClick={() => setDark(!dark)}>Switch to {dark ? 'Light' : 'Dark'}</button>
      </nav>
      <Outlet />
    </ThemeContext.Provider>
  );
}

export default App;
