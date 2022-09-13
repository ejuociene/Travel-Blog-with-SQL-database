import axios from 'axios';
import React from 'react';
import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MainContext from '../MainContext';

const AccountEdit = () => {
	const { userInfo, setUserInfo, setLoggedIn } = useContext(MainContext);
	const [ message, setMessage ] = useState('');
	const [ form, setForm ] = useState({
		firstName: userInfo.firstName,
		lastName: userInfo.lastName,
		email: userInfo.email
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
			.put('/api/users/user-update', form)
			.then((resp) => {
				setMessage(resp.data);
				setUserInfo((prevInfo) => {
					return { ...prevInfo, firstName: form.firstName, lastName: form.lastName, email: form.email };
				});
				setTimeout(() => navigate('/account'), 1000);
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
		<main className="container">
			{message && <h4 className="message">{message}</h4>}
			<h1 className="title">Update User Details</h1>
			<form className="form" onSubmit={(e) => handleSubmit(e)}>
				<div className="form--item">
					<label>First Name:</label>
					<input
						type="text"
						className="form-input"
						name="firstName"
						onChange={(e) => handleForm(e)}
						value={form.firstName}
					/>
				</div>
				<div className="form--item">
					<label>Last Name:</label>
					<input
						type="text"
						className="form-input"
						name="lastName"
						onChange={(e) => handleForm(e)}
						value={form.lastName}
					/>
				</div>
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
				<button className="btn">Continue</button>
			</form>
			<Link to={'/account'} className="link">
				← Back
			</Link>
		</main>
	);
};

export default AccountEdit;
