import type { ComponentPropsWithoutRef, FC } from "react";
import { clsx } from "../utils/clsx";
import * as styles from "./styles.css";

type Props = ComponentPropsWithoutRef<"button">;
export const Button: FC<Props> = (props) => {
	return (
		<button {...props} className={clsx(styles.root, props.className)}>
			button
		</button>
	);
};
