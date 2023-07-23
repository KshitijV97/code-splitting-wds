import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavWrapper from "./components/NavWrapper/NavWrapper";
import "./App.css";
import Home from "./components/Home/Home";
import Store from "./components/Store/Store";
import About from "./components/About/About";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<NavWrapper />}>
					<Route path='/' element={<Home />} />
					<Route path='/store' element={<Store />} />
					<Route path='/about' element={<About />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
