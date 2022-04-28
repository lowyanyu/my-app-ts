import { useContext, useState } from 'react';
import { OpenContext } from '../contexts/OpenContext';

const menuContainerStyle = {
  position: 'relative',
  width: '300px',
  padding: '16px',
  backgroundColor: 'white',
  border: '1px solid #E5E5E5',
} as React.CSSProperties;

const menuTitleStyle = {
  fontWeight: 'bold',
  cursor: 'pointer',
} as React.CSSProperties;

const menuSpanStyle = {
  float: 'right',
	cursor: 'pointer'
} as React.CSSProperties;

function Menu(props: any) {
  // const [isOpen, setIsOpen] = useState(false);
	const isOpenUtil = useContext(OpenContext);

  return (
    <div style={menuContainerStyle}>
			<div style={menuTitleStyle} onClick={() => isOpenUtil.setOpenContext(!isOpenUtil.openContext)}>
				{props.title}
				<span style={menuSpanStyle}>
					{isOpenUtil.openContext ? '-' : '+'}
				</span>
			</div>
			{isOpenUtil.openContext && <ul>{props.children}</ul>}
    </div>
  );
}

export default Menu;