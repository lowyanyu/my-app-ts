import './TableRow.css';
import { User } from "../model/user.model";

function TableEvenRow(props: User) {
	const user = props;
	return (
		<tr className="Table-even-row">
			<td>{user.userId}</td>
			<td>{user.userAccount}</td>
			<td>{user.userName}</td>
		</tr>
	)
}

function TableOddRow(props: User) {
	const user = props;
	return (
		<tr className="Table-odd-row">
			<td>{user.userId}</td>
			<td>{user.userAccount}</td>
			<td>{user.userName}</td>
		</tr>
	)
}

export { TableEvenRow, TableOddRow };