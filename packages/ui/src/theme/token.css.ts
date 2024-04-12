import { createGlobalTheme, createGlobalThemeContract } from "@vanilla-extract/css";

export const vars = createGlobalThemeContract({
	color: {
		primary: "color-primary",
		primaryHover: "color-primary-hover",
		textPrimary: "color-text-primary",
		borderColor: "color-border-color",
		focusBorderColor: "color-focus-border-color",
	},
});

createGlobalTheme(":root", vars, {
	color: {
		primary: "#007BFF",
		primaryHover: "#0056b3",
		textPrimary: "#FFFFFF",
		borderColor: "#ccc",
		focusBorderColor: "#007BFF",
	},
});
