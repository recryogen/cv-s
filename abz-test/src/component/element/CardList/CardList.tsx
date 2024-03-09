import cx from "classnames";

import style from "./cardlist.module.scss";

import { ICardProps } from "../../../utils/cardProps";
import Card from "../Card/Card";

type cardListType = Array<ICardProps> | null;

interface cardListProps {
  cards: cardListType;
}
export default function CardList(props: cardListProps) {
  return (
    <ul className={cx(style.cardlist)}>
      {props.cards != null ? (
        props.cards.map((card, index) => {
          return <Card key={index} {...card} />;
        })
      ) : (
        <></>
      )}
    </ul>
  );
}
