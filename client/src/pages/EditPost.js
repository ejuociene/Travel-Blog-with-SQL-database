import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import MainContext from '../MainContext';

const EditPost = () => {
	const { categories, setRefresh, setLoggedIn } = useContext(MainContext);
	const { id } = useParams();
	const [ message, setMessage ] = useState('');
	const [ newCategory, setNewCategory ] = useState(false);
	const [ post, setPost ] = useState({
		title: '',
		content: '',
		image: '',
		category: ''
	});
	const navigate = useNavigate();
	useEffect(() => {
		axios
			.get(`/api/posts/post/${id}`)
			.then((resp) => {
				if (!resp) {
					navigate(`/`);
					return;
				} else {
					setPost(resp.data);
				}
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
	}, []);
	const handleForm = (e) => {
		setPost({ ...post, [e.target.name]: e.target.name === 'image' ? e.target.files[0] : e.target.value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		const form = new FormData();
		for (const key in post) {
			form.append(key, post[key]);
		}
		axios
			.put(`/api/posts/edit/${id}`, form)
			.then((resp) => {
				setMessage(resp.data);
			})
			.catch((error) => {
				console.log(error);
				if (error.response.status === 401) {
					setTimeout(() => {
						setLoggedIn = false;
						navigate('/login');
					}, 1000);
				}
			})
			.finally(() => {
				setTimeout(() => {
					setMessage('');
					setRefresh((prevState) => !prevState);
					navigate(`/post/${id}`);
				}, 1000);
			});
	};
	const handleNewCategoryBtn = (e) => {
		e.preventDefault();
		setNewCategory((prevState) => !prevState);
	};
	return (
		<main className="container">
			{message && <h4 className="message">{message}</h4>}
			<h1 className="title">Edit Post</h1>
			<form className="form" onSubmit={(e) => handleSubmit(e)}>
				<div className="form--item">
					<label>Post Title:</label>
					<input
						type="text"
						name="title"
						className="form-input"
						value={post.title}
						onChange={(e) => handleForm(e)}
					/>
				</div>
				<div className="form--item">
					<label>Content:</label>
					<textarea
						name="content"
						className="form-input"
						rows={15}
						value={post.content}
						onChange={(e) => handleForm(e)}
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
								value={post.category}
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
								value={post.category}
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
					<label>Cover image url:</label>
					<img src={post.image} alt="image" className="small-image" />
					<input type="file" className="file-upload" name="image" onChange={(e) => handleForm(e)} />
				</div>
				<button className="btn">Save</button>
				<Link to={'/admin'} className="link">
					← Back
				</Link>
			</form>
		</main>
	);
};

export default EditPost;
