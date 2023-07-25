import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavWrapper from "./components/NavWrapper/NavWrapper";
import "./App.css";

const Home = React.lazy(() => import("./components/Home/Home"));
const Store = React.lazy(() => import("./components/Store/Store"));
const About = React.lazy(() =>
	import("./components/About/About").then((module) => {
		return { default: module.About };
	})
);

function App() {
	return (
		<BrowserRouter>
			<React.Suspense fallback={<h1>Loading....</h1>}>
				<Routes>
					<Route path='/' element={<NavWrapper />}>
						<Route path='/' element={<Home />} />
						<Route path='/store' element={<Store />} />
						<Route path='/about' element={<About />} />
					</Route>
				</Routes>
			</React.Suspense>
		</BrowserRouter>
	);
}

export default App;
