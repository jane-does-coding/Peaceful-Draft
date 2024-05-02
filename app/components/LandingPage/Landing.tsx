"use client";
import { motion } from "framer-motion";

export default function Landing() {
	return (
		<motion.div
			initial={{ opacity: 0, y: "20vh" }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.45, delay: 0 }}
			className="w-fit rounded-[3rem] overflow-hidden mx-auto min-h-[100vh] z-[1]"
		>
			<div className="rounded-[3rem] overflow-hidden">
				<video
					autoPlay
					loop
					className="w-[50vw] opacity-[0.8] mx-auto min-h-[100vh]"
				>
					<source src="/ocean.mp4" type="video/mp4" />
					<source src="/ocean2.webm" type="video/webm" />
				</video>
			</div>

			<motion.h1
				initial={{ opacity: 0, y: "-70%", x: "-50%" }}
				animate={{ opacity: 1, y: "-50%", x: "-50%" }}
				transition={{ duration: 0.6, delay: 0.5 }}
				className="exo drop-shadow-2xl text-[6rem] xl:text-[8.25rem] font-regular outline-[2px] uppercase tracking-[0.75rem] absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] w-[90vw] text-center text-white"
			>
				Plan Your
				<br />
				<motion.span
					initial={{ opacity: 0, y: "-2rem", x: "-50%" }}
					animate={{ opacity: 1, y: "-50%", x: "-50%" }}
					transition={{ duration: 0.6, delay: 0.95 }}
					className="sacramento capitalize tracking-[0]"
				>
					Peaceful
				</motion.span>
				<br />
				Time Wisely
			</motion.h1>
		</motion.div>
	);
}
