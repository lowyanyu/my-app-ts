import { User } from "../model/user.model";
import { useContext, useEffect, useRef, useState } from 'react';

function Message(props: {message: string[]}) {
	const messages = props.message.map(m => {
    return (<p key={m}>{m}</p>)
	});

	return (
    <div>{messages}</div>
	)
}

function Messages(props: {user: User}) {
	const user = props.user;
	const [message, setMessage] = useState(new Array<string>());
	const latestMsg = useRef(message);
	// const ctx: any = useContext(message);

	useEffect(() => {
		if (user.userName !== '') {
		setTimeout(() => {
			console.log(latestMsg.current);
			let msg = latestMsg.current.slice(1, message.length);
			setMessage(msg);
		}, 3000);
		}
	}, [message, user]);

	if (user.userId !== null) {
    let msg = `Add User [${user.userName}] Success!`;
    if (!message.includes(msg)) {
    message.push(msg);
    }
	}

	if (message.length > 0) {
    return <Message message={message}/>;
	} else {
    return null;
	}
}

function UserForm() {
	const [user, setUser] = useState(new User());

	// useEffect(() => {
  //   if (user.userId !== null) {
  //   	setUser(new User());
  //   }
	// }, [user]);

	return (
    <div>
			<h2>新增使用者</h2>
			<form id="form">
				<div>
					<label htmlFor="userId">ID: </label>
					<input id="userId"/>
				</div>
				<div>
					<label htmlFor="userAccount">帳號: </label>
					<input id="userAccount"/>
				</div>
				<div>
					<label htmlFor="userName">名稱: </label>
					<input id="userName"/>
				</div>
				<div style={{marginTop: '10px'}}>
					<button type="button" onClick={e => submitForm(e)}>Submit</button>
				</div>        
			</form>
			{/* <Messages user={user} /> */}
    </div>
	)

	function submitForm(e: any): void {
    const form = e.target.form;
    setUser({
			userId: form.userId.value,
			userAccount: form.userAccount.value,
			userName: form.userName.value
    });
    form.reset();
	} 
}

export default UserForm;