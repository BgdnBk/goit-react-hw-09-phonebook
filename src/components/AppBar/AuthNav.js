import { NavLink } from "react-router-dom";
import s from "../../components/AppBar/Phonebook.module.css";

export default function AuthNav() {
  return (
    <div>
      <NavLink to="/registration" className={s.Navlink}>
        Регистрация
      </NavLink>
      <NavLink to="/login" className={s.Navlink}>
        Авторизация
      </NavLink>
    </div>
  );
}
