import { Form, Formik } from "formik";
import * as Yup from "yup";
import { MyTextInput } from "../components";
import "../styles/styles.css";

const initialValues = {
  name: "",
  email: "",
  password: "",
  repeatPassword: "",
};

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(15, "Name must be at most 15 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Repeat Password is required"),
});

export const RegisterFormikPage = () => {
  const handleSubmit = (values: typeof initialValues) => {
    console.log("Form submitted with values:", values);
  };

  return (
    <div>
      <h1>Register Formik Page</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ handleReset }) => (
          <Form>
            <MyTextInput
              label="Name"
              name="name"
              type="text"
              placeholder="Enter your name"
            />

            <MyTextInput
              label="Email"
              name="email"
              type="email"
              placeholder="Enter your email"
            />

            <MyTextInput
              label="Password"
              name="password"
              type="password"
              placeholder="Enter your password"
            />

            <MyTextInput
              label="Repeat Password"
              name="repeatPassword"
              type="password"
              placeholder="Repeat your password"
            />

            <button type="submit">Create</button>

            <button type="button" onClick={handleReset}>
              Reset Form
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
