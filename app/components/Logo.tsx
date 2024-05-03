import Link from "next/link";
import React from "react";

const Logo = () => {
	return (
		<Link href={"/"} className="fixed top-3 left-8">
			<img src="/logo.png" width={120} alt="" />
		</Link>
	);
};

export default Logo;
