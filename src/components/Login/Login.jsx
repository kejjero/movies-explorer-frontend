import React, {useState} from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import "./Login.css";
import UnauthPage from "../UnauthPage/UnauthPage";

const Login = () => {
  const [email, seEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleChangePassword = (value) => {
    setPassword(value)
  }

  const handleChangeEmail = (value) => {
    seEmail(value)
  }

  return (
    <UnauthPage
      title="Рады видеть!"
      text="Ещё не зарегистрированы?"
      link="/signup"
      linkText="Регистрация"
    >
      <form className="login" name="login" noValidate>
        <fieldset className="login__inputs">
          <Input
            name="email"
            label="E-mail"
            type="email"
            autoComplete="off"
            email={email}
            onChange={handleChangeEmail}
          />
          <Input
            name="password"
            label="Пароль"
            value={password}
            type="password"
            onChange={handleChangePassword}
            autoComplete="off"
          />
        </fieldset>
        <Button
          className="button_type_blue button_type_submit"
          type="submit"
        >
          Войти
        </Button>
      </form>
    </UnauthPage>
  );
};

export default Login;
