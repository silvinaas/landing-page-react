import React from "react";
import Card from "./card";
const Cards_container = () => {
	return (
		<div className="row">
			<div className="col">
				<Card />
			</div>

			<div className="col">
				<Card />
			</div>

			<div className="col">
				<Card />
			</div>

			<div className="col">
				<Card />
			</div>
		</div>
	);
};

export default Cards_container;
