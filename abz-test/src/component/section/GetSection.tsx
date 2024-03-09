import cx from "classnames";

import styles from "./section.module.scss";
import { headingSize } from "../../utils/typo";
import CardList from "../element/CardList/CardList";

import Heading from "../typo/Heading";
import ShowMoreBtn from "../element/Button/ShowMoreBtn";
import { useState, useEffect } from "react";

import { getUsers } from "../../api/getUsers";

import { ICardProps } from "../../utils/cardProps";

function GetSection() {
  let [list, setList] = useState<ICardProps[]>([]);
  let [unseenUsersExists, setUnseenUsersExists] = useState<boolean>(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await getUsers();
      console.log(data);

      let updatedList: ICardProps[] = [...list, ...data.users];

      data.total_users - data.page * data.count > 0
        ? setUnseenUsersExists(true)
        : setUnseenUsersExists(false);

      setList(updatedList);
    } catch (error) {}
  };
  return (
    <section className={cx(styles.section)}>
      <Heading size={headingSize.h1}>Working with GET request</Heading>
      <CardList cards={list} />
      {unseenUsersExists ? <ShowMoreBtn action={fetchData} /> : <></>}
    </section>
  );
}
export default GetSection;
