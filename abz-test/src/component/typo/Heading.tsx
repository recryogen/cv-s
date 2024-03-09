import cx from "classnames";
import styles from "./typo.module.scss";
import { headingSize } from "../../utils/typo";

interface headingProps {
  size: headingSize;
  weight?: string;
  children?: React.ReactNode;
}

export default function Heading(props: headingProps) {
  return (
    <p className={cx(styles[props.size], styles.heading)}>{props.children}</p>
  );
}
