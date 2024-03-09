import cx from "classnames";
import styles from "./button.module.scss";

import { btnType } from "../../../utils/btntypes";
import { textSize } from "../../../utils/typo";

import Text from "../../typo/Text";

interface btnprops {
  children: string;
  enabledState: boolean;
  action: React.MouseEventHandler<HTMLButtonElement>;
  type : btnType;
}

export default function Button(props: btnprops) {
  return (
    <button
      className={cx(
        styles.button,
        props.enabledState ? styles.enabled : styles.disabled,
        styles[props.type]
      )}
      onClick={props.action}
    >
      <Text size={textSize.p1}>{props.children}</Text>
    </button>
  );
}
