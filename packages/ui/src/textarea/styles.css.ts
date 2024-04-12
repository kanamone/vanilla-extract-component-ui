import { style } from "@vanilla-extract/css";
import { vars } from "../theme/token.css";

export const root = style({
	padding: "10px",
	borderColor: vars.color.borderColor,
	borderRadius: "5px",
	width: "300px",
	height: "150px",
	fontSize: "16px",
	resize: "none",
	":focus": {
		borderColor: vars.color.focusBorderColor,
		outline: "none",
	},
});
