import { style } from "@vanilla-extract/css";
import { vars } from "../theme/token.css";
export const root = style({
	backgroundColor: vars.color.primary,
	color: vars.color.textPrimary,
	padding: "10px 20px",
	border: "none",
	borderRadius: "5px",
	cursor: "pointer",
	fontSize: "16px",
	":hover": {
		backgroundColor: vars.color.primaryHover,
	},
});
