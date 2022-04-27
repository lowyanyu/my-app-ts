import './TableRow.css';
import { User } from "../model/user.model";
import { useContext } from 'react';
import { ThemeContext } from './Theme';

function TableEvenRow(props: User) {
	const user = props;
	const dark = useContext(ThemeContext);
	return (
		<tr className={'Table-even-row' + (dark ? '--dark' : '')}>
			<td>{user.userId}</td>
			<td>{user.userAccount}</td>
			<td>{user.userName}</td>
		</tr>
	)
}

function TableOddRow(props: User) {
	const user = props;
	const dark = useContext(ThemeContext);
	return (
		<tr className={'Table-odd-row' + (dark ? '--dark' : '')}>
			<td>{user.userId}</td>
			<td>{user.userAccount}</td>
			<td>{user.userName}</td>
		</tr>
	)
}

export { TableEvenRow, TableOddRow };