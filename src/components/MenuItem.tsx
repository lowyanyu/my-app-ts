import { useContext } from 'react';
import { OpenContext } from "../contexts/OpenContext";

const menuItemStyle = {
  marginBottom: '8px',
  paddingLeft: '24px',
  listStyle: 'none',
	cursor: 'pointer'
} as React.CSSProperties;


function MenuItem(props: any){
	const isOpenUtil = useContext(OpenContext);

  return <li style={menuItemStyle} onClick={() => isOpenUtil.setOpenContext(!isOpenUtil.openContext)}>{props.text}</li>;
}

export default MenuItem;