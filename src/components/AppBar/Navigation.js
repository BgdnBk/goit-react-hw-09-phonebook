import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import authSelectors from "../../redux/auth/auth-selectors";
import s from "../../components/AppBar/Phonebook.module.css";

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);
  return (
    <div>
      <NavLink exact to="/" className={s.Navlink}>
        Главная
      </NavLink>

      {isLoggedIn && (
        <NavLink exact to="/contacts" className={s.Navlink}>
          Контакты
        </NavLink>
      )}
    </div>
  );
}
