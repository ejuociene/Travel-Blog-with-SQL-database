import axios from 'axios';
import { useState, useContext, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import MainContext from '../MainContext';

const Account = () => {
	const [ message, setMessage ] = useState('');
	const { setLoggedIn, userInfo, setUserInfo } = useContext(MainContext);
	const navigate = useNavigate();
	const logout = () => {
		axios
			.get('/api/users/logout')
			.then((resp) => {
				setMessage(resp.data);
				setTimeout(() => {
					navigate('/');
					setLoggedIn(false);
					setUserInfo({});
				}, 1000);
			})
			.catch((err) => {
				console.log(err);
				if (err.response.status === 401) {
					setTimeout(() => {
						setLoggedIn = false;
						navigate('/login');
					}, 1000);
				}
				setMessage(err.response.data);
				setTimeout(() => {
					navigate('/');
				}, 1000);
			});
	};
	return (
		<div className="container">
			{message && <h4 className="message">{message}</h4>}
			<div className="user-container">
				<h1 className="title">User info:</h1>
				<div className="user-info">
					<p className="info-text">
						<span className="bold">First Name: </span>
						{userInfo.firstName}
					</p>
					<p className="info-text">
						<span className="bold">Last Name: </span> {userInfo.lastName}
					</p>
					<p className="info-text">
						<span className="bold">Email: </span> {userInfo.email}
					</p>
					<Link to={'/account-edit'} className="link grey">
						Update user details
					</Link>
				</div>
				<Link to={'/update-password'} className="link grey">
					Change password
				</Link>
			</div>
			<button onClick={() => logout()} className="btn center">
				Logout
			</button>
		</div>
	);
};

export default Account;
