import './TableRow.css';
import { User } from "../model/user.model";
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

function TableEvenRow(props: {user: User, darkTheme: boolean}) {
	const user = props.user;
	const dark = props.darkTheme;
	// const dark = useContext(ThemeContext);
	return (
		<tr className={'Table-even-row' + (dark ? '--dark' : '')}>
			<td>{user.userId}</td>
			<td>{user.userAccount}</td>
			<td>{user.userName}</td>
		</tr>
	)
}

function TableOddRow(props: {user: User, darkTheme: boolean}) {
	const user = props.user;
	const dark = props.darkTheme;
	// const dark = useContext(ThemeContext);
	return (
		<tr className={'Table-odd-row' + (dark ? '--dark' : '')}>
			<td>{user.userId}</td>
			<td>{user.userAccount}</td>
			<td>{user.userName}</td>
		</tr>
	)
}

export { TableEvenRow, TableOddRow };