import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

function NavWrapper() {
	return (
		<>
			<nav style={{ display: "flex", gap: "1rem" }}>
				<Link to='/'>Home</Link>
				<Link to='/store'>Store</Link>
				<Link to='/about'>About</Link>
			</nav>
			<Outlet />
		</>
	);
}

export default NavWrapper;
