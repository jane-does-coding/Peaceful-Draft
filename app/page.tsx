import Image from "next/image";
import Landing from "./components/LandingPage/Landing";

export default function Home() {
	return (
		<>
			{/* <div className="w-fit rounded-[3rem] overflow-hidden mx-auto min-h-[100vh] z-[1]">
				<div className="rounded-[3rem] overflow-hidden">
					{" "}
					<video
						autoPlay
						loop
						className="w-[50vw] opacity-[0.8] mx-auto min-h-[100vh]"
					>
						<source src="/ocean.mp4" type="video/mp4" />
						<source src="/ocean2.webm" type="video/webm" />
					</video>
				</div>
			</div>

			<h1 className="exo drop-shadow-2xl text-[6rem] xl:text-[8.25rem] font-regular outline-[2px] uppercase tracking-[0.75rem] absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] w-[90vw] text-center text-white">
				Plan Your <br />
				<span className="sacramento capitalize tracking-[0]"> Peaceful </span>
				<br />
				Time Wisely
			</h1> */}

			<Landing />
		</>
	);
}
