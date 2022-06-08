import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserStoreContext } from "./store";

const User = () => {
  const params = useParams();
  const navigate = useNavigate();
  const {state} = useContext(UserStoreContext);

  const userId = params.userId ?? '-1';
  const user = state.filter(user => user.userId === parseInt(userId))[0];
  console.log(user);
  
  useEffect(() => {
    if (user === undefined) {
      navigate('/user');
    }
  });
  
  return (
    <div>
      <h2>使用者 {params.userId}</h2>
      <pre>{JSON.stringify(user)}</pre>
    </div>
  )
};

export default User;