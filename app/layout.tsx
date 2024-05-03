import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Logo from "./components/Logo";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Exo:ital,wght@0,100..900;1,100..900&family=Orbitron:wght@400..900&family=Sacramento&display=swap"
					rel="stylesheet"
				></link>
			</head>
			<body className={`${inter.className} relative bg-neutral-900`}>
				<div className="z-[999]">
					<Logo />
					<Header />
				</div>
				{children}
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<Footer />
			</body>
		</html>
	);
}
