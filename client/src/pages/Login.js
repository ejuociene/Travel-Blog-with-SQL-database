import React from 'react';
import { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import MainContext from '../MainContext';

const Login = () => {
	const { setLoggedIn, setUserInfo, setRefresh } = useContext(MainContext);
	const [ message, setMessage ] = useState('');
	const [ form, setForm ] = useState({
		email: '',
		password: ''
	});
	const navigate = useNavigate();
	const handleForm = (e) => {
		setForm((prevform) => {
			return { ...prevform, [e.target.name]: e.target.value };
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.post('/api/users/login', form)
			.then((resp) => {
				setMessage(resp.data.message);
				setUserInfo(resp.data.user);
				setLoggedIn(true);
				setTimeout(() => {
					if (resp.data.user.role === 1) {
						navigate(-1);
					} else {
						navigate('/');
					}
				}, 500);
			})
			.catch((err) => {
				console.log(err);
				err.response.data.message ? setMessage(err.response.data.message) : setMessage(err.response.data);
			});
	};
	return (
		<main className="container">
			{message && <h4 className="message">{message}</h4>}
			<h1 className="title">Login</h1>
			<form className="form" onSubmit={(e) => handleSubmit(e)}>
				<div className="form--item">
					<label>Email:</label>
					<input
						type="email"
						className="form-input"
						name="email"
						onChange={(e) => handleForm(e)}
						value={form.email}
					/>
				</div>
				<div className="form--item">
					<label>Password:</label>
					<input
						type="password"
						className="form-input"
						name="password"
						onChange={(e) => handleForm(e)}
						value={form.password}
					/>
				</div>
				<button className="btn">Continue</button>
			</form>
			<Link to={'/'} className="link">
				← Back
			</Link>
		</main>
	);
};

export default Login;
