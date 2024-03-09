import cx from "classnames";
import styles from "./typo.module.scss";
import {textSize} from "../../utils/typo";

interface textprops {
  size: textSize;
  weight?: string;
  children?: React.ReactNode;
}

export default function Text(props: textprops) {
  return (
    <p className={cx(styles[props.size], styles.text)}>{props.children}</p>
  );
}
