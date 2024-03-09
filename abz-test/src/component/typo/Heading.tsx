import cx from "classnames";
import styles from "./heading.module.scss";
import typoSize from "../../utils/typo";

interface headingProps {
  size: typoSize;
  weight?: string;
  children?: React.ReactNode;
}

export default function Heading(props: headingProps) {
  return (
    <p className={cx(styles[props.size], styles.heading)}>{props.children}</p>
  );
}
