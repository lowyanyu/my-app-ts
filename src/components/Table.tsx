import { useContext, useState } from "react";
import { User } from "../model/user.model";
import { StoreContext } from "../stores/UserStore";
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

function Table() {
  const {state, dispatch} = useContext(StoreContext);
  const [dark, setDark] = useState(false);
  console.log(dispatch);
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
        {renderData(state, dark)}
      </tbody>
    </table>
    </div>
  )
}

export default Table;