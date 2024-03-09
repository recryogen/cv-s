import cx from "classnames";

import styles from "./section.module.scss";
import Logo from "../../utils/logo";
import SingUpBtn from "../element/Button/SignUpBtn";
import UsersBtn from "../element/Button/UsersBtn";
export default function Navbar() {
  return (
    <section className={cx(styles.section, styles.navbar)}>
      <a href="">
        <Logo />
      </a>
      <div className={cx(styles.btn_container)}>
        <SingUpBtn enabledState={true} />
        <UsersBtn enabledState={true} />
      </div>
    </section>
  );
}
