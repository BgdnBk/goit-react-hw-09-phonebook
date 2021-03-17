import React from "react";
import shortid from "shortid";
import s from "../Filter/Filter.module.css";
import { connect } from "react-redux";
import * as phonebookAction from "../../redux/phonebook/phonebook-action";
import phonebookSelector from "../../redux/phonebook/phonebook-selector";

function Filter({ value, searchContact }) {
  const id = shortid.generate();

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
        onChange={searchContact}
        id={id}
        className={s.inputSearch}
      ></input>
    </div>
  );
}
const mapStateToProps = (state) => ({
  value: phonebookSelector.getFilter(state),
});

const mapDispatchToProps = (dispatch) => ({
  searchContact: (e) => dispatch(phonebookAction.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
