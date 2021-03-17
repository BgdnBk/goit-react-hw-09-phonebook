import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import authSelectors from "../../redux/auth/auth-selectors";
import s from "../../components/AppBar/Phonebook.module.css";

function Navigation({ isAuthenticated }) {
  return (
    <div>
      <NavLink exact to="/" className={s.Navlink}>
        Главная
      </NavLink>

      {isAuthenticated && (
        <NavLink exact to="/contacts" className={s.Navlink}>
          Контакты
        </NavLink>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
