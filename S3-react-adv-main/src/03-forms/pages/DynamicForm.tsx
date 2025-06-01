import { Form, Formik } from "formik";
import * as Yup from "yup";
import formJson from "../data/custom-form.json";
import { MySelect, MyTextInput } from "../components";

const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};

for (const input of formJson) {
  initialValues[input.name] = input.value;

  if (!input.validations) continue;

  let schema = Yup.string();

  for (const rule of input.validations) {
    if (rule.type === "required") {
      schema = schema.required(rule.message);
    }
    if (rule.type === "minLength") {
      schema = schema.min((rule as any).value, rule.message);
    }
    if (rule.type === "maxLength") {
      schema = schema.max((rule as any).value, rule.message);
    }
    if (rule.type === "email") {
      schema = schema.email(rule.message);
    }
  }

  requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({ ...requiredFields });

export const DynamicForm = () => {
  return (
    <div>
      <h1>Dynamic Form</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log("Form submitted with values:", values);
        }}
        validationSchema={validationSchema}
      >
        {({ handleReset }) => (
          <Form noValidate>
            {formJson.map(({ type, name, label, placeholder, options }) => {
              if (type === "input" || type === "password" || type === "email") {
                return (
                  <MyTextInput
                    key={name}
                    type={type as any}
                    name={name}
                    label={label}
                    placeholder={placeholder}
                  />
                );
              } else if (type === "select") {
                return (
                  <MySelect key={name} name={name} label={label}>
                    <option value="" label="Select an option" />
                    {options?.map(({ id, label }) => (
                      <option key={id} value={id}>
                        {label}
                      </option>
                    ))}
                  </MySelect>
                );
              }

              throw new Error(`Unsupported input type: ${type}`);
            })}

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
