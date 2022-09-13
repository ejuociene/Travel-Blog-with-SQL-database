import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
	const [ message, setMessage ] = useState('');
	const [ form, setForm ] = useState({
		firstName: '',
		lastName: '',
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
			.post('/api/users/register', form)
			.then((resp) => {
				setMessage(resp.data);
				setTimeout(() => navigate('/login'), 1000);
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
				<div className="form--item">
					<label>Password:</label>
					<input
						type="password"
						minLength={5}
						name="password"
						className="form-input"
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

export default Register;
