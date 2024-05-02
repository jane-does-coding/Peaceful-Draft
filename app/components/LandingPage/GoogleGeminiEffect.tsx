"use client";
import { useScroll, useTransform } from "framer-motion";
import React from "react";
import { GoogleGeminiEffect } from "../ui/google-gemini-effect";

export function GoogleGeminiEffectComponent() {
	const ref = React.useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"],
	});

	const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
	const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
	const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
	const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
	const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

	return (
		<div
			className="h-[400vh] bg-neutral-900 w-full rounded-md relative pt-40 overflow-clip"
			ref={ref}
		>
			<GoogleGeminiEffect
				title="Organize your day"
				description="Learn and organize your day better with Peaceful!"
				pathLengths={[
					pathLengthFirst,
					pathLengthSecond,
					pathLengthThird,
					pathLengthFourth,
					pathLengthFifth,
				]}
			/>
		</div>
	);
}
