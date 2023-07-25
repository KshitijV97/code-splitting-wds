import React from "react";
const AdminData = React.lazy(() => import("../AdminData/AdminData"));
// import sum from "../../functions/sum"; // Very heavy function, No need to load this unless user clicks on Button

// Dynamic import
// Only imports when someone tries to use it on the page
function addTwo() {
	import("../../functions/sum").then((module) => {
		alert(module.sum(2, 2));
	});
}

export default function Home() {
	const [isAdmin, setAdmin] = React.useState(false);

	function toggleAdmin() {
		setAdmin((prev) => !prev);
	}

	return (
		<div>
			<h1>This is Home!!!</h1>
			<br />
			<br />
			<button onClick={addTwo}>Add 2 with Two</button>
			<br />
			<br />
			<button onClick={toggleAdmin}> admin</button>
			<br />
			<br />
			<React.Suspense fallback={<h1>Loading admin data.....</h1>}>
				{isAdmin ? <AdminData /> : <h2>You are not an admin </h2>}
			</React.Suspense>
		</div>
	);
}
