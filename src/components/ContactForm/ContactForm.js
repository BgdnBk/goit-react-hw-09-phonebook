import React, { useCallback } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useDispatch, useSelector } from "react-redux";
import { phonebookOperations, phonebookSelector } from "../../redux/phonebook";
import s from "../ContactForm/ContactForm.module.css";

export default function ContactForm() {
  const dispatch = useDispatch();
  const contactList = useSelector(phonebookSelector.getPhonebookFilter);

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
                onClick={() => dispatch(phonebookOperations.deleteContact(id))}
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

// const mapStateToProps = (state) => ({
//   contactList: phonebookSelector.getPhonebookFilter(state),
// });

// const mapDispatchToProps = (dispatch) => ({
//   onDeleted: (id) => dispatch(phonebookOperations.deleteContact(id)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(СontactForm);

// function СontactForm({ contactList, onDeleted }) {
// return (
//   <TransitionGroup component="ul" classNames={s.table}>
//     {contactList.map(({ id, name, number }) => {
//       return (
//         <CSSTransition key={id} timeout={250} classNames={s} unmountOnExit>
//           <li>
//             {name}: {number}
//             <button
//               className={s.btnList}
//               type="button"
//               onClick={() => onDeleted(id)}
//             >
//               Удалить
//             </button>
//           </li>
//         </CSSTransition>
//       );
//     })}
//   </TransitionGroup>
// );
// }
