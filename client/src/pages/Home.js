import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Footer from '../components/Footer/Footer';
import Search from "../images/search.svg"
import Filter from "../images/filter.svg"
import Sort from "../images/sort.svg"
import MainContext from '../MainContext';
import prevPage from "../images/prev_page.svg"
import nextPage from "../images/next_page.svg"



function Home() {
	const {loggedIn, categories, refresh, setRefresh, page, setPage} = useContext(MainContext)
	const [ posts, setPosts ] = useState([]);
	const [ message, setMessage ] = useState('');
	const [search, setSearch] = useState(false)
	const [filter, setFilter] = useState(false)
	const [sort, setSort] = useState(false)
	const [searchData, setSearchData] = useState("")
	const [filterData, setFilterData] = useState("")
	const [sortData, setSortData] = useState("id-DESC")
	const [totalPosts, setTotalPosts] = useState("")
	const navigate = useNavigate()
	const showSearch = () => {
		setSearch((prevSearch) => !prevSearch)
	}

	const endSearch = () => {
		setSearch((prevSearch) => !prevSearch)
		setSearchData("")
	}

	const showFilter = () => {
		setFilter((prevFilter) => !prevFilter)
	}

	const resetFilter = () => {
		setFilter((prevFilter) => !prevFilter)
		setFilterData("")}

	const showSort = () => {
			setSort((prevState) => !prevState)
		}
	
	const dateUpdate = (array) => {
		return array.map((post) => {
			const date = new Date(post.createdAt);
			post.createdAt = date.toLocaleDateString('lt-LT');
			return post;
		});
	};
	useEffect(
		() => {axios
					.get(`/api/posts/?sort=${sortData}&filter=${filterData}&search=${searchData}&page=${page}`)
					.then((resp) => {
						if (resp.data.message) {
							setMessage(resp.data.message);
						} else {
							const donePosts = dateUpdate(resp.data.rows);

							setTotalPosts(resp.data.count)
							setPosts(donePosts);
							window.scrollTo(0, 0)
						}
					})
					.catch((err) => {
						console.log(err)
						setMessage(err.response.data)
					})
		
		},
		[ refresh, searchData, filterData, sortData, categories, page ]
	);
	return (<>
		<div className="post-container">
			{message && <h4 className="message">{message}</h4>}
			<div className='icons-container'>
			<form className={search ? 'action-container underline' : "action-container"} onSubmit={(e) => e.preventDefault()}>
				<img src={Search} alt="search" className='icon' onClick={showSearch}/>
				{search && <><input type="text" name="search" placeholder='Search' autoFocus className='action-input' value={searchData} onChange={(e) => setSearchData(e.target.value)}/><span className='exit' onClick={endSearch}>x</span></>}
			</form>
			<form className={(filter || filterData !== "") ? 'action-container underline' : "action-container"} onSubmit={(e) => e.preventDefault()}>
				<img src={Filter} alt="filter" className='icon' onClick={showFilter}/>
				{(filter || filterData !== "") && <div>
					<select value={filterData} name="filter" className='action-input' onChange={(e) => setFilterData(e.target.value)}>
						<option value="default" disabled>- Category -</option>
						{categories.map((category) => {
									return (
										<option key={category} value={category}>
											{category}
										</option>
									);
								})}
			
					</select>
					<span className='exit' onClick={resetFilter}>x</span>
					</div>}
			</form>
			<form className={sort ? 'action-container underline' : "action-container"} onSubmit={(e) => e.preventDefault()}>
				<img src={Sort} alt="sort" className='icon' onClick={showSort}/>
				{ sort && <div>
					<select defaultValue={"id-DESC"} name="sort" className='action-input' onChange={(e) => setSortData(e.target.value)}>
					<option value="" disabled >- Sort by -</option>
						<option value="id-DESC">Newest first</option>
						<option value="id-ASC">Oldest first</option>
					</select>
					<span className='exit' onClick={showSort}>x</span>
					</div>}
			</form>
			</div>
			{posts.length > 0 && (
				<div className="articles">
					{posts &&
						posts.map((post) => {
							return (
								<div key={post.id} className="post">
									<Link to={'/post/' + post.id} className="img">
										<img className="img" src={post.image} alt={post.title} />
									</Link>
									{post.category && (
										<span className="category" onClick={() => setFilterData(post.category)}>
											{post.category}
										</span>
									)}
									<div className="data">
										<p>{post.createdAt}</p>
										<p>/</p>
										<p>{post.comment_count > 0 ? post.comment_count : 0} {post.comment_count === 1 ? "COMMENT" : "COMMENTS" }</p>
									</div>
									<Link to={'/post/' + post.id} className="link">
										<h1 className="home-title">{post.title}</h1>
									</Link>
									<p className="home-text">{post.content.slice(0, 300)}...</p>
									<Link to={'/post/' + post.id} className="readmore">
										Continue reading →
									</Link>

									<br className="break" />
								</div>
							);
						})}
				</div>
			)}
			<div className='pagination'>
				{page > 1 && <img src={prevPage} alt="previous" className="page" onClick={() => setPage((prevPage) => prevPage - 1)}/>}
				{page < (totalPosts/6) && <img src={nextPage} alt="next" className="page" onClick={() => setPage((prevPage) => prevPage + 1)}/>}
			</div>
		</div>
			<Footer/></>
		
	);
}

export default Home;
