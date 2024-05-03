"use client";
import React from "react";
import { motion } from "framer-motion";
import CardTags from "./CardTags";
import CardTime from "./CardTime";

const Card = ({ isPast = false }: { isPast?: boolean }) => {
	return (
		<div className={`${isPast && " opacity-100 "}`}>
			<motion.div
				className={`1-full border-l-[1.5px] border-b-[1px] backdrop-blur-[6px]  border-b-neutral-700  p-10 pl-12 relative 
      ${
				isPast
					? "bg-neutral-700/30 border-red-100/30 backdrop-blur-[6px]"
					: "bg-neutral-800/10 border-red-100 backdrop-blur-[6px]"
			}`}
				initial={{ opacity: 0, x: -100 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.5 }}
			>
				{/* Point */}
				<div
					className={`w-[14px] h-[14px] absolute left-[-8px] rounded-full top-[50%] translate-y-[-50%] bg-gradient-to-t 
        ${
					isPast ? "from-blue-300/75 to-red-300/75" : "from-blue-300 to-red-300"
				}`}
				></div>
				{/* Point */}
				<motion.h1
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.4 }}
					className={`text-2xl ${isPast ? "text-neutral-600" : "text-white"}`}
				>
					Lorem, ipsum dolor.
				</motion.h1>

				{/* Time */}
				<CardTime isPast={isPast} time1={"11:00"} time2={"14:00"} />

				{/* description */}
				<motion.p
					initial={{ opacity: 0, y: 0 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.65, delay: 0.35 }}
					className={`my-2 mb-4 text-neutral-200 exo ${
						isPast && "text-neutral-600"
					}`}
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
					maiores. Consequatur voluptatem neque illum debitis.
				</motion.p>

				{/* Tags */}
				<CardTags
					isPast={isPast}
					tags={[{ title: "tag 1" }, { title: "tag 2" }]}
				/>
			</motion.div>
		</div>
	);
};

export default Card;
