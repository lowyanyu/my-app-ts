import { User } from "../model/user.model";
import { TableEvenRow, TableOddRow } from "./TableRow";

function renderData(users: User[]) {
	const rows = users.map((user, i) => {
		if (i % 2 === 0) {
			return <TableEvenRow key={user.userId} {...user} />
		} else {
			return <TableOddRow key={user.userId} {...user} />
		}
	});
	return rows;
}

function Table(props: {data: User[]}) {
	const users = props.data;
	return (
		<table>
			<tbody>
				<tr>
					<th>ID</th>
					<th>帳號</th>
					<th>名稱</th>
				</tr>
				{renderData(users)}
			</tbody>
		</table>
	)
}

export default Table;