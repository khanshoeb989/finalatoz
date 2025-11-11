import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Import the same logo used in `navbar-1.tsx` and set it as the page favicon at runtime.
// This avoids having to copy the image into `public/` and works with Vite's asset handling.
import favicon from "./assets/atozlogo.jpg";

function setFavicon(href: string) {
	const head = document.getElementsByTagName("head")[0];
	let link = head.querySelector("link[rel~='icon']") as HTMLLinkElement | null;
	if (!link) {
		link = document.createElement("link");
		link.rel = "icon";
		head.appendChild(link);
	}
	link.href = href;
}

setFavicon(favicon);

createRoot(document.getElementById("root")!).render(<App />);
