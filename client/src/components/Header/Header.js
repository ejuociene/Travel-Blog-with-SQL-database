import { useContext } from 'react';
import { Link } from 'react-router-dom';
import "./header.css"
import Logo from "../../images/Logo.png"
import MainContext from '../../MainContext';

const Header = () => {
	const {loggedIn, userInfo, setPage} = useContext(MainContext);
	return (
	<header>
		<Link to="/" className='logo' onClick={() => setPage(1)}>
		<img src={Logo} alt="logo" className='logo'/>
		</Link>
		<nav className="nav">
			<ul className="nav--list">
				<li className="nav--item">
					<Link to="/" className="nav--link"  onClick={() => setPage(1)}>
						Home
					</Link>
				</li>
				{loggedIn && userInfo.role === 1 && <>
					<li className="nav--item">
					<Link to="/admin/new-post" className="nav--link">
						New Post
					</Link>
				</li>
					<li className="nav--item">
					<Link to="/admin" className="nav--link">
						Post Admin
					</Link>
				</li></>}
				{loggedIn ? (<>
				<li className="nav--item">
					<Link to="/account" className="nav--link">
						My account
					</Link>
				</li>
				</>)
			:  (<>
				<li className="nav--item">
					<Link to="/register" className="nav--link">
						Register
					</Link>
				</li>
				<li className="nav--item">
					<Link to="/login" className="nav--link">
						Login
					</Link>
				</li>
				</>)
			}
			</ul>
		</nav>
	</header>
	);
}
export default Header;
