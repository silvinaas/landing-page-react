import React from "react";
import Cards_container from "./cards_container";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Footer from "./footer";
//include images into your bundle

//create your first component
const Home = () => {
	return (
		<div>
			<div>
				<Navbar />
			</div>

			<div>
				<Jumbotron />
			</div>
			<div>
				<Cards_container />
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
};

export default Home;
