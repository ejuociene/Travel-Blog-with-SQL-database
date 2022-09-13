import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import MainContext from '../MainContext';
import convertDate from '../utils/Date.js'

const SinglePost = () => {
	const { loggedIn, userInfo, setRefresh, refresh } = useContext(MainContext);
	const { id } = useParams();
	const [ post, setPost ] = useState({});
	const [ message, setMessage ] = useState('');
	const [ comment, setComment ] = useState('');
	const navigate = useNavigate();
	useEffect(
		() => {
			axios
				.get(`/api/posts/post/${id}`)
				.then((resp) => {
					if (!resp) {
						navigate('/');
						return;
					}
					setPost(resp.data);
				})
				.catch((error) => {
					console.log(error);
					navigate('/');
				});
		},
		[ refresh ]
	);
	const handleDelete = (id) => {
		if (isNaN(id) || !loggedIn) return;
		axios
			.delete(`/api/posts/delete/${id}`)
			.then((resp) => {
				setMessage(resp.data);
					navigate('/');

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
	const saveComment = (e) => {
		e.preventDefault();
		axios.put(`/api/posts/edit/comment/${id}`, { comment_count: 1});
		axios.post('/api/comments/', { comment, postId: id, userId: userInfo.id })
			.then((resp) => {
				setMessage(resp.data);
				window.scrollTo(0, 0);
				setRefresh((prevState) => !prevState)
				setComment('');
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
	return (
		<main className="container">
			{message && <h4 className="message">{message}</h4>}
			{ post && <>
			<img className="img" src={post.image} alt={post.title} />
			<h1 className="title">{post.title} </h1>
			<div className="data">
				<p>{convertDate(post.createdAt)} /</p>
				<p>{post.comment_count > 0 ? post.comment_count : 0} {post.comment_count === 1 ? "COMMENT" : "COMMENTS" } / </p>
				<p>{post.category}</p>
			</div></>}
			{loggedIn &&
			userInfo.role === 1 && (
				<div className="btn--container">
					<button className="btn" onClick={() => handleDelete(post.id)}>
						Delete
					</button>

					<Link to={'/admin/edit/' + post.id} className="btn btn--link">
						Edit
					</Link>
				</div>
			)}
			<article className="text">{post.content}</article>
			<div className="line-break" />
			<br />
			{post.comments && (
				<div className="comment-container">
					<h3 className="comment-title">Post Comments:</h3>
					{post.comments.map((comment) => {
						return (
							<div className="comment" key={comment.id}>
								<div className="comment-data">
									<div className="comment-name">
										{comment.user.firstName} {comment.user.lastName}
									</div>
									<div className="comment-time">{convertDate(comment.createdAt)}</div>
								</div>
								<div className="comment-text">{comment.comment}</div>
							</div>
						);
					})}
				</div>
			)}
			{loggedIn ? (
				<form className="form" onSubmit={(e) => saveComment(e)}>
					<h1 className="comment-title">Add a comment:</h1>
					<div className="form--item">
						<textarea
							name="comment"
							rows="5"
							className="form-input"
							onChange={(e) => setComment(e.target.value)}
							value={comment}
						/>
					</div>
					<button className="btn save-btn">Save</button>
				</form>
			) : (
				<Link to="/login" className="readmore form-text">
					Log in to leave a comment
				</Link>
			)}
			<br />
			<Link to={'/'} className="link">
				← To All Posts
			</Link>
		</main>
	);
};

export default SinglePost;
