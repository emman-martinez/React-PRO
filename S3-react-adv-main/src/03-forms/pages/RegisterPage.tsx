import { FormEvent } from "react";
import { useForm } from "../hooks/useForm";
import "../styles/styles.css";

export const RegisterPage = () => {
  const {
    formData,
    onChange,
    resetForm,
    isValidEmail,
    name,
    email,
    password,
    repeatPassword,
  } = useForm({
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Registering user:", formData);
    // Here you would typically handle the registration logic, e.g., API call
  };

  return (
    <div>
      <h1>Register Page</h1>

      <form noValidate onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={onChange}
          name="name"
          className={`${name.trim().length <= 0 && "has-error"}`}
        />
        {name.trim().length <= 0 && <span>This field is necessary</span>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={onChange}
          name="email"
          className={`${!isValidEmail(email) && "has-error"}`}
        />
        {!isValidEmail(email) && <span>Invalid email</span>}

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={onChange}
          name="password"
        />
        {password.trim().length <= 0 && <span>This field is necessary</span>}
        {password.trim().length < 6 && password.trim().length > 0 && (
          <span>Password must be at least 6 characters</span>
        )}

        <input
          type="password"
          placeholder="Repeat Password"
          value={repeatPassword}
          onChange={onChange}
          name="repeatPassword"
        />
        {repeatPassword.trim().length <= 0 && (
          <span>This field is necessary</span>
        )}
        {repeatPassword !== password && repeatPassword.trim().length > 0 && (
          <span>Passwords do not match</span>
        )}

        <button type="submit">Create</button>
        <button type="button" onClick={resetForm}>
          Reset Form
        </button>
      </form>
    </div>
  );
};
