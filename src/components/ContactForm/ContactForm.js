import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import s from "../ContactForm/ContactForm.module.css";
import { connect } from "react-redux";
import { phonebookOperations, phonebookSelector } from "../../redux/phonebook";

function СontactForm({ contactList, onDeleted }) {
  return (
    <TransitionGroup component="ul" classNames={s.table}>
      {contactList.map(({ id, name, number }) => {
        return (
          <CSSTransition key={id} timeout={250} classNames={s} unmountOnExit>
            <li>
              {name}: {number}
              <button
                className={s.btnList}
                type="button"
                onClick={() => onDeleted(id)}
              >
                Удалить
              </button>
            </li>
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
}

const mapStateToProps = (state) => ({
  contactList: phonebookSelector.getPhonebookFilter(state),
});

const mapDispatchToProps = (dispatch) => ({
  onDeleted: (id) => dispatch(phonebookOperations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(СontactForm);
