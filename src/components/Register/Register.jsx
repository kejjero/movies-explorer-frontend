import React, {useState} from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import "./Register.css";
import UnauthPage from "../UnauthPage/UnauthPage";

const Register = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleChangeName = (value) => {
    setName(value)
  }

  const handleChangeEmail = (value) => {
    setEmail(value)
  }

  const handleChangePassword = (value) => {
    setPassword(value)
  }


  return (
    <UnauthPage
      title="Добро пожаловать!"
      text="Уже зарегистрированы?"
      link="/signin"
      linkText="Войти"
    >
      <form className="register" name="register"  noValidate>
        <fieldset className="register__inputs">
          <Input
            name="name"
            label="Имя"
            modifier="unauth"
            value={name}
            type="text"
            autoComplete="off"
            onChange={handleChangeName}
          />
          <Input
            name="email"
            label="E-mail"
            modifier="unauth"
            value={email}
            type="email"
            autoComplete="off"
            onChange={handleChangeEmail}
          />
          <Input
            name="password"
            label="Пароль"
            modifier="unauth"
            value={password}
            error="Что-то пошло не так..."
            type="password"
            autoComplete="off"
            onChange={handleChangePassword}
          />
        </fieldset>
        <Button className="button_type_blue button_type_submit" type="submit">
          Зарегистрироваться
        </Button>
      </form>
    </UnauthPage>
  );
};

export default Register;
