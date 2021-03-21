import React, { useCallback } from "react";
import shortid from "shortid";
import s from "../Filter/Filter.module.css";
import { useDispatch, useSelector } from "react-redux";
import * as phonebookAction from "../../redux/phonebook/phonebook-action";
import phonebookSelector from "../../redux/phonebook/phonebook-selector";

export default function Filter() {
  const id = shortid.generate();

  const dispatch = useDispatch();
  const value = useSelector(phonebookSelector.getFilter);

  const onSearch = useCallback(
    (e) => {
      dispatch(phonebookAction.changeFilter(e.target.value));
    },
    [dispatch]
  );

  return (
    <div className={s.containerSearch}>
      <h2 className={s.contactList}>Контакты</h2>
      <label className={s.labelSearch} htmlFor={id}>
        Поиск контакта по имени
      </label>
      <input
        type="text"
        name="filter"
        value={value}
        onChange={onSearch}
        id={id}
        className={s.inputSearch}
      ></input>
    </div>
  );
}
