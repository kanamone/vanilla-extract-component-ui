import { useEffect, useState } from "react";
import { Button, TextArea } from "ui";

import "./style.css";

function App() {
	const [theme, setTheme] = useState<"dark" | "light">("light");
	useEffect(() => {
		const origin = document.documentElement.style;
		document.documentElement.style.setProperty("color-scheme", theme);

		return () => {
			for (const key in origin) {
				document.documentElement.style.setProperty(key, origin[key]);
			}
		};
	}, [theme]);

	return (
		<div className="root">
			<Button onClick={() => setTheme((theme) => (theme === "light" ? "dark" : "light"))}>{theme}</Button>
			<TextArea />
			<Button>button</Button>
		</div>
	);
}

export default App;
