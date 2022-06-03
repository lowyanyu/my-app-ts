import MenuItem from './MenuItem';
import Menu from './Menu';
import { OpenContext } from '../contexts/OpenContext';
import { useState } from 'react';

const menuList = [
  '使用者管理',
  '角色管理'
];

const MenuPage = () =>{
  const [isOpen, setIsOpen] = useState(true);

  let menuItemArr = menuList.map(m => <MenuItem key={m} text={m}/>);

  return (
    <OpenContext.Provider value={{openContext: isOpen, setOpenContext: setIsOpen}}>
      <Menu title={'系統管理'}>
        {menuItemArr}
      </Menu>
    </OpenContext.Provider>
  );
}

export default MenuPage;