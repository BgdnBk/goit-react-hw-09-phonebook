import React, { useState, useEffect, useCallback } from "react";
import shortid from "shortid";
import { useDispatch, useSelector } from "react-redux";
import phonebookOperations from "../../redux/phonebook/phonebook-operation";
import phonebookSelector from "../../redux/phonebook/phonebook-selector";
// import authOperations from "../../redux/auth/auth-operations";
import s from "../Form/Form.module.css";
import { toast } from "react-toastify";

export default function Form() {
  const [newName, setName] = useState("");
  const [number, setNumber] = useState("");

  const dispatch = useDispatch();
  const state = useSelector(phonebookSelector.getAllContacts);

  useEffect(() => {
    dispatch(phonebookOperations.fetchContacts());
  }, [dispatch]);

  const InputValues = (e) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const addContact = (e) => {
    e.preventDefault();

    const checNumer = number;

    if (checNumer === "") {
      return toast.error("Введите номер");
    }

    onSubmit(newName, number, state);
    resetInputValues();
  };

  const resetInputValues = () => {
    setName("");
    setNumber("");
  };

  const checkName = (contactList, newName) => {
    return contactList?.some(({ name }) => name === newName);
  };

  const onSubmit = (newName, number, contactList) => {
    if (checkName(contactList, newName)) {
      return toast.error("Это имя уже существует");
    }
    dispatch(phonebookOperations.addContact(newName, number));
  };

  const idName = shortid.generate();
  const idNumber = shortid.generate();

  return (
    <form className={s.form} onSubmit={addContact}>
      <label htmlFor={idName} className={s.labelName}>
        Имя
      </label>
      <input
        id={idName}
        type="text"
        name="name"
        value={newName}
        onChange={InputValues}
        autoComplete="off"
      ></input>
      <label htmlFor={idNumber} className={s.labelNumber}>
        Номер
      </label>
      <input
        id={idNumber}
        type="tel"
        pattern="^[ 0-9]+$"
        name="number"
        value={number}
        onChange={InputValues}
        autoComplete="off"
      ></input>
      <button className={s.btnForm} type="submite">
        Добавить контакт
      </button>
    </form>
  );
}

// class Form extends Component {
//   state = {
//     name: "",
//     number: "",
//   };

//   componentDidMount() {
//     this.props.fetchContacts();
//   }

// InputValues = (e) => {
//   const { name, value } = e.currentTarget;

//   switch (name) {
//     case "name":
//       this.setState({ name: value });
//       break;
//     case "number":
//       this.setState({ number: value });
//       break;
//     default:
//       return;
//   }
// };

// addContact = (e) => {
//   e.preventDefault();

//   const checNumer = this.state.number;

//   if (checNumer === "") {
//     return toast.error("Введите номер");
//   }

//   this.props.onSubmit({
//     name: this.state.name,
//     number: this.state.number,
//   });
//   this.resetInputValues();
// };

// resetInputValues = () => {
//   this.setState({ name: "", number: "" });
// };

//   render() {
// const idName = shortid.generate();
// const idNumber = shortid.generate();

//     return (
//       <form className={s.form} onSubmit={this.addContact}>
//         <label htmlFor={idName} className={s.labelName}>
//           Имя
//         </label>
//         <input
//           id={idName}
//           type="text"
//           name="name"
//           value={this.state.name}
//           onChange={this.InputValues}
//           autoComplete="off"
//         ></input>
//         <label htmlFor={idNumber} className={s.labelNumber}>
//           Номер
//         </label>
//         <input
//           id={idNumber}
//           type="tel"
//           pattern="^[ 0-9]+$"
//           name="number"
//           value={this.state.number}
//           onChange={this.InputValues}
//           autoComplete="off"
//         ></input>
//         <button className={s.btnForm} type="submite">
//           Добавить контакт
//         </button>
//       </form>
//     );
//   }
// }

// const checkName = (contactList, newName) => {
//   return contactList?.some(({ name }) => name === newName);
// };

// const mapStateToProps = (state) => ({
//   contactList: state.phonebook.contacts,
// });

// const mapDispatchToProps = (dispatch) => ({
//   fetchContacts: () => dispatch(phonebookOperations.fetchContacts()),
// onSubmit: (newName, number, contactList) => {
//   if (checkName(contactList, newName)) {
//     return toast.error("Это имя уже существует");
//   }
//   dispatch(phonebookOperations.addContact(newName, number));
// },
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Form);
