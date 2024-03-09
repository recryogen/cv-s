import cx from "classnames";

import styles from "./section.module.scss";
import Heading from "../typo/Heading";

import { headingSize } from "../../utils/typo";
import { Formik, Field, Form, FormikHelpers } from "formik";
import SingUpBtn from "../element/Button/SignUpBtn";

interface Values {
  firstName: string;
  lastName: string;
  email: string;
}

export default function PostSection() {
  return (
    <section className={cx(styles.section)}>
      <Heading size={headingSize.h1}>Working with POST request</Heading>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
        }}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
      >
        <Form>
          <Field id="name"  className={cx(styles.field)} name="firstName" placeholder="Your name" />
          <Field id="email" className={cx(styles.field)} name="email" placeholder="Email" type="email" />
          <Field id="phone" className={cx(styles.field)} name="phone" placeholder="Phone" />

          <SingUpBtn enabledState={false}></SingUpBtn>
        </Form>
      </Formik>
    </section>
  );
}
