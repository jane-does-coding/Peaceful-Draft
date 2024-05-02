import Image from "next/image";
import Landing from "./components/LandingPage/Landing";
import { GoogleGeminiEffectComponent } from "./components/LandingPage/GoogleGeminiEffect";

export default function Home() {
	return (
		<>
			<Landing />
			<GoogleGeminiEffectComponent />
		</>
	);
}
