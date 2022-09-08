import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from "axios"
import './App.css';
import MainContext from './MainContext';
import NewPost from './pages/NewPost.js';
import NotFound from './pages/404.js';
import EditPost from './pages/EditPost';
import SinglePost from './pages/SinglePost';
import Header from './components/Header/Header';
import Register from './pages/Register';
import Login from './pages/Login';
import Account from './pages/Account';
import Home from './pages/Home';
import AccountEdit from './pages/AccountEdit';
import UpdatePassword from './pages/UpdatePassword';
import Admin from './pages/Admin';

function App() {
	const [ loggedIn, setLoggedIn ] = useState(false);
	const [ categories, setCategories ] = useState([]);
	const [userInfo, setUserInfo] = useState({})
	const [refresh, setRefresh] = useState(false)
	const [page, setPage] = useState(1)
	const contextValues = {page, setPage, loggedIn, setLoggedIn, categories, setCategories, refresh, setRefresh, userInfo, setUserInfo}
	useEffect(() => {
		axios.get("/api/users/check-auth/")
		.then(resp => {
				setLoggedIn(true);
				setUserInfo(resp.data)
			}).catch(err => {
			console.log(err)
			setLoggedIn(false)
			})}, [refresh])

	useEffect(() => {
		axios
			.get('/api/posts/categories')
			.then((resp) => setCategories(resp.data))
	}, [refresh]);
	return (
		<BrowserRouter>
		<MainContext.Provider value={contextValues}>
			<Header />
			<Routes>
				<Route path="/" element={<Home/>} />
				<Route path="*" element={<NotFound />} />
				<Route path="/post/:id" element={<SinglePost  />} />
				<Route path="/register" element={<Register />} />
				<Route path="/login" element={<Login />} />
	
				{loggedIn && 
				<>				
				<Route path="/account" element={<Account />} />
				<Route path="/account-edit" element={<AccountEdit />} />
				<Route path="/update-password" element={<UpdatePassword />} />
				</>}
				{loggedIn && userInfo.role === 1 &&
			
				<Route path="/admin">
					<Route index element={<Admin />}></Route>
				<Route path="new-post" element={<NewPost />} />
				<Route path="edit/:id" element={<EditPost />} />			
					</Route>
				}
			</Routes>
			</MainContext.Provider>
		</BrowserRouter>
	);
}

export default App;
