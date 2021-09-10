import React from "react";
import Cards_container from "./cards_container";
import Navbar from "./navbar";
//include images into your bundle

//create your first component
const Home = () => {
	return (
		<div>
			<div>
				<Navbar />
			</div>

			<div>
				<Cards_container />
			</div>
		</div>
	);
};

export default Home;
