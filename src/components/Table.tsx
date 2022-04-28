import { useState } from "react";
import { User } from "../model/user.model";
import { TableEvenRow, TableOddRow } from "./TableRow";

function renderData(users: User[], dark: boolean) {
	const rows = users.map((user, i) => {
		if (i % 2 === 0) {
			return <TableEvenRow key={user.userId} user={user} darkTheme={dark} />
		} else {
			return <TableOddRow key={user.userId} user={user} darkTheme={dark} />
		}
	});
	return rows;
}

function Table(props: {data: User[]}) {
	const users = props.data;
	const [dark, setDark] = useState(false);
	return (
		<div>
			<button onClick={() => setDark(!dark)}>Click me</button>
		<table>
			<tbody>
				<tr>
					<th>ID</th>
					<th>帳號</th>
					<th>名稱</th>
				</tr>
				{renderData(users, dark)}
			</tbody>
		</table>
		</div>
	)
}

export default Table;