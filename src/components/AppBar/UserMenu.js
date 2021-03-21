import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authSelectors, authOperations } from "../../redux/auth";
import s from "../../components/AppBar/Phonebook.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  const onLogout = useCallback(() => {
    dispatch(authOperations.logout());
  }, [dispatch]);

  return (
    <div>
      <span className={s.Navlink}>Добро пожаловать, {name}</span>
      <button type="button" onClick={onLogout}>
        Выйти
      </button>
    </div>
  );
}
