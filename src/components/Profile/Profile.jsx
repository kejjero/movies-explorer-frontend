import Header from "../Header/Header";
import Input from "../Input/Input";
import Button from "../Button/Button";
import "./Profile.css";
import {useState} from "react";


const Profile = () => {
  const [name, setName] = useState("Виталий");
  const [email, setEmail] = useState("pochta@yandex.ru");

  const handleChangeName = (value) => {
    setName(value)
  }

  const handleChangeEmail = (value) => {
    setName(value)
  }

  return (
      <section className="profile">
        <Header />
        <div className="profile__container">
          <h2 className="profile__title">Привет, Виталий!</h2>
          <form className="profile__form" noValidate>
            <fieldset className="profile__inputs">
              <Input
                  name="name"
                  label="Имя"
                  modifier="profile"
                  type="text"
                  value={name}
                  autoComplete="off"
                  onChange={handleChangeName}
              />
              <Input
                  name="email"
                  label="E-mail"
                  modifier="profile"
                  type="email"
                  value={email}
                  autoComplete="off"
                  onChange={handleChangeEmail}
              />
            </fieldset>
            <p>
            </p>
            <div className="profile__buttons">
              <Button
                  className="button_type_profile"
                  type="submit"
              >Редактировать
              </Button>
              <Button className="button_type_profile button_type_red-text">
                Выйти из аккаунта
              </Button>
            </div>
          </form>
        </div>
      </section>
  );
}

export default Profile;
