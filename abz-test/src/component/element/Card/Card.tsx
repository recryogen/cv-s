import cx from "classnames";
import styles from "./card.module.scss";

import { ICardProps } from "../../../utils/cardProps";
import { textSize } from "../../../utils/typo";

import Text from "../../typo/Text";

function Card(props: ICardProps) {
  return (
    <div className={cx(styles.card)}>
      <img src={props.photo} alt="card photo" className={cx(styles.photo)} />
      <Text size={textSize.p1}>{props.name}</Text>
      <div className={styles.description}>
        <Text size={textSize.p1}>{props.position}</Text>
        <Text size={textSize.p1}>{props.email}</Text>
        <Text size={textSize.p1}>{props.phone}</Text>
      </div>
    </div>
  );
}
export default Card;
