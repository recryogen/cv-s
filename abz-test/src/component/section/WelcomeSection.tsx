import cx from "classnames";

import style from "./section.module.scss";

import { headingSize, textSize } from "../../utils/typo";

import Heading from "../typo/Heading";
import Text from "../typo/Text";
import SingUpBtn from "../element/Button/SignUpBtn";

export default function WelcomeSection() {
  return (
    <section className={cx(style.section, style.welcome_section)}>
      <div className={cx(style.background_image)}></div>
      <div className={cx(style.welcome_container)}>
        <Heading size={headingSize.h1}>
          Test assignment for front-end developer
        </Heading>
        <Text size={textSize.p1}>
          What defines a good front-end developer is one that has skilled
          knowledge of HTML, CSS, JS with a vast understanding of User design
          thinking as they'll be building web interfaces with accessibility in
          mind. They should also be excited to learn, as the world of Front-End
          Development keeps evolving.
        </Text>
        <SingUpBtn enabledState={true} />
      </div>
    </section>
  );
}
