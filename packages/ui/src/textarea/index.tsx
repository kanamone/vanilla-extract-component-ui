import type { ComponentPropsWithoutRef, FC } from "react";
import { clsx } from "../utils/clsx";
import * as styles from "./styles.css";

type Props = ComponentPropsWithoutRef<"textarea">;
export const TextArea: FC<Props> = (props) => {
	return <textarea {...props} className={clsx(styles.root, props.className)} />;
};
