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
		primary: "light-dark(#007BFF, #0a84ff)",
		primaryHover: "light-dark(#0056b3, #0060df)",
		textPrimary: "light-dark(#FFFFFF, #e0e0e0)",
		borderColor: "light-dark(#ccc, #333)",
		focusBorderColor: "light-dark(#007BFF, #0a84ff)",
	},
});
