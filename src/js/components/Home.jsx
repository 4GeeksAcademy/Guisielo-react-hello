import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Navbar } from "./Navbar";
import { Jumbotron } from "./Jumbotron";
import { Card } from "./Card";
import { Footer } from "./Footer";


//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar/>
			<div class="container">
				<Jumbotron/>
				<div className = "row g-4 p-3">
					<div className="col-lg-3 col-md-6 col-12">
            			<Card />
        			</div>
					<div className="col-lg-3 col-md-6 col-12">
            			<Card />
        			</div>
					<div className="col-lg-3 col-md-6 col-12">
            			<Card />
        			</div>
					<div className="col-lg-3 col-md-6 col-12">
            			<Card />
        			</div>
				</div>
			</div>
			<Footer/>
		</div>
	);
};

export default Home;