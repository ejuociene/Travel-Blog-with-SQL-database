import { useState, useEffect, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import convertDate from '../utils/Date';
import MainContext from '../MainContext';

const Admin = () => {
	const { loggedIn, setLoggedIn } = useContext(MainContext);
	const [ posts, setPosts ] = useState([]);
	const [ message, setMessage ] = useState('');
	const [ refresh, setRefresh ] = useState(false);
	const navigate = useNavigate();
	useEffect(
		() => {
			axios.get('/api/posts/all/').then((resp) => setPosts(resp.data));
		},
		[ refresh ]
	);
	const handleDelete = (id) => {
		if (isNaN(id) || !loggedIn) return;
		axios
			.delete(`/api/posts/delete/${id}`)
			.then((resp) => {
				setMessage(resp.data);
				window.scrollTo(0, 0);
				setRefresh((prevState) => {
					return !prevState;
				});
			})
			.catch((error) => {
				console.log(error);
				setMessage(error.response.data);
				window.scrollTo(0, 0);
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
				}, 1000);
			});
	};
	return (
		<div className="container">
			{message && <h4 className="message">{message}</h4>}
			<h2 className="title">Admin panel</h2>
			<h3>Posts list</h3>
			<table className="table">
				<thead>
					<tr className="thead_row">
						<th>ID</th>
						<th>Title</th>
						<th>Created at</th>
						<th>Modified at</th>
						<th />
						<th />
					</tr>
				</thead>
				<tbody>
					{posts.map((post) => {
						return (
							<tr key={post.id}>
								<td>{post.id}</td>
								<td className="title-row" onClick={() => navigate(`/post/${post.id}`)}>
									{post.title}
								</td>
								<td>{convertDate(post.createdAt)}</td>
								<td>{convertDate(post.updatedAt)}</td>
								<td>
									<button className="btn" onClick={() => handleDelete(post.id)}>
										Delete
									</button>
								</td>
								<td>
									<Link to={'/admin/edit/' + post.id} className="btn btn--link">
										Edit
									</Link>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default Admin;
