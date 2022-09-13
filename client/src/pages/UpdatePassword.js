import axios from 'axios';
import React from 'react';
import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MainContext from '../MainContext';

const UpdatePassword = () => {
	const [ message, setMessage ] = useState('');
	const [ form, setForm ] = useState({
		password: '',
		newPassword: ''
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
			.put('/api/users/password-update', form)
			.then((resp) => {
				setMessage(resp.data);
				setTimeout(() => navigate('/account'), 1000);
			})
			.catch((err) => {
				setMessage(err.response.data);
			});
	};
	return (
		<main className="container">
			{message && <h4 className="message">{message}</h4>}
			<h1 className="title">Register</h1>
			<form className="form" onSubmit={(e) => handleSubmit(e)}>
				<div className="form--item">
					<label>Current Password:</label>
					<input type="password" className="form-input" name="password" onChange={(e) => handleForm(e)} />
				</div>
				<div className="form--item">
					<label>New Password:</label>
					<input type="password" className="form-input" name="newPassword" onChange={(e) => handleForm(e)} />
				</div>
				<button className="btn">Continue</button>
			</form>
			<Link to={'/account'} className="link">
				← Back
			</Link>
		</main>
	);
};

export default UpdatePassword;
