import React from "react";
import { BackgroundBeams } from "../components/ui/background-beams";
import Card from "../components/Card";

const Page = () => {
	return (
		<div>
			<div className="z-[-1] fixed top-0 left-0 w-[100vw] h-screen opacity-100">
				<BackgroundBeams />
			</div>
			<br />
			<br />
			<h1 className="exo text-white text-[3rem] mb-10 mx-auto text-center">
				What's up for today?
			</h1>
			<div className="w-[65vw] mx-auto flex flex-col shadow-xl">
				<Card isPast />
				<Card isPast />
				<Card isPast />
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	);
};

export default Page;
