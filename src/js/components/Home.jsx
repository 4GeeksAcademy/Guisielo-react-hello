import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Navbar } from "./Navbar";
import { Jumbotron } from "./Jumbotron";
import { Card } from "./Card";
import { Footer } from "./Footer";


//create your first component
const Home = () => {
	const cardImages = [
		{url:"https://images.pexels.com/photos/10967612/pexels-photo-10967612.jpeg",title:"Lindas Flores"},
		{url:"https://images.pexels.com/photos/10967612/pexels-photo-10967612.jpeg",title:"Lindas Flores"},
		{url:"https://images.pexels.com/photos/10967612/pexels-photo-10967612.jpeg",title:"Lindas Flores"},
		{url:"https://images.pexels.com/photos/10967612/pexels-photo-10967612.jpeg",title:"Lindas Flores"}
	];
	return (
		<div className="text-center">
			<Navbar/>
			<div className="container">
				<Jumbotron/>
				<div className = "row g-4 p-3">{
						cardImages.map((img,index) => {
							return (
								<div className="col-lg-3 col-md-6 col-12">
									<Card key={index} url={img.url} title={img.title} />
								</div>
							);
						})}					
				</div>
			</div>
			<Footer/>
		</div>
	);
};

export default Home;