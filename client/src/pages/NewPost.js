import axios from 'axios';
import React from 'react';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import MainContext from '../MainContext';

const NewPost = () => {
	const { categories, setRefresh } = useContext(MainContext);
	const navigate = useNavigate();
	const [ message, setMessage ] = useState('');
	const [ newCategory, setNewCategory ] = useState(false);
	const [ postForm, setPostForm ] = useState({
		title: '',
		content: '',
		image: '',
		category: 'Travel'
	});
	const handleForm = (e) => {
		setPostForm({
			...postForm,
			[e.target.name]: e.target.name === 'image' ? e.target.files[0] : e.target.value
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		const form = new FormData();
		for (const key in postForm) {
			form.append(key, postForm[key]);
		}
		axios
			.post('/api/posts/', form)
			.then((resp) => resp)
			.then((resp) => {
				if (resp.data) {
					setMessage(resp.data);
				}
				setTimeout(() => {
					setRefresh((prevState) => !prevState);
					navigate('/');
				}, 1000);
			})
			.catch((error) => {
				console.log(error);
				setMessage(error.response.data);
				window.scrollTo(0, 0);
				if (error.response.status === 401) {
					setTimeout(() => {
						navigate('/login');
					}, 1000);
				}
			});
	};
	const handleNewCategoryBtn = (e) => {
		e.preventDefault();
		setNewCategory((prevState) => !prevState);
	};

	return (
		<div className="container">
			{message && <h4 className="message">{message}</h4>}
			<h1 className="title">Add a New Post</h1>
			<form onSubmit={(e) => handleSubmit(e)} className="form">
				<div className="form--item">
					<label>Post Title:</label>
					<input
						type="text"
						name="title"
						className="form-input"
						onChange={(e) => handleForm(e)}
						value={postForm.title}
					/>
				</div>
				<div className="form--item">
					<label>Content:</label>
					<textarea
						name="content"
						className="form-input"
						rows={15}
						onChange={(e) => handleForm(e)}
						value={postForm.content}
					/>
				</div>
				<div className="form--item">
					<label>Category</label>
					{newCategory ? (
						<div className="category-input">
							<input
								type="text"
								name="category"
								onChange={(e) => handleForm(e)}
								value={postForm.category}
								className="category-select"
								autoFocus
							/>
							<button className="form-btn" onClick={(e) => handleNewCategoryBtn(e)}>
								Choose existing
							</button>
						</div>
					) : (
						<div className="category-input">
							<select
								name="category"
								className="category-select"
								onChange={(e) => handleForm(e)}
								value={postForm.category}
							>
								{categories.map((category) => {
									return (
										<option key={category} value={category}>
											{category}
										</option>
									);
								})}
							</select>
							<button className="form-btn" onClick={(e) => handleNewCategoryBtn(e)}>
								+ new category
							</button>
						</div>
					)}
				</div>
				<div className="form--item">
					<label>Cover image:</label>
					<input type="file" className="file-upload" name="image" onChange={(e) => handleForm(e)} />
				</div>
				<button className="btn">Submit</button>
			</form>
			<Link to={'/'} className="link">
				← Back
			</Link>
		</div>
	);
};

export default NewPost;
