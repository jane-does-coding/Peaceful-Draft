import React from "react";

const Footer = () => {
	return (
		<div className="w-full flex items-center justify-start gap-2 text-white exo2 bg-neutral-950/50 backdrop-blur-[8px] p-2 px-14 absolute bottom-0 left-0 text-xl">
			<img src="/logo.png" width={85} alt="" />
			<span> &copy; Peaceful</span>
		</div>
	);
};

export default Footer;
