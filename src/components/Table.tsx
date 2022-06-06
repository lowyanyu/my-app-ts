import { useContext } from "react";
import { User } from "../model/user.model";
import { StoreContext } from "../stores/UserStore";
import { TableEvenRow, TableOddRow } from "./TableRow";

function renderData(users: User[]) {
  const rows = users.map((user, i) => {
    if (i % 2 === 0) {
      return <TableEvenRow key={user.userId} user={user} />
    } else {
      return <TableOddRow key={user.userId} user={user} />
    }
  });
  return rows;
}

function Table() {
  const userStore = useContext(StoreContext);

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>ID</th>
            <th>帳號</th>
            <th>名稱</th>
          </tr>
          {renderData(userStore.state)}
        </tbody>
      </table>
    </div>
  )
}

export default Table;