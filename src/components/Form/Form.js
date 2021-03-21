import React, { useState, useEffect } from "react";
import shortid from "shortid";
import s from "../Form/Form.module.css";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import phonebookOperations from "../../redux/phonebook/phonebook-operation";

export default function Form() {
  const [newName, setNewName] = useState("");
  const [number, setNumber] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(phonebookOperations.fetchContacts());
  }, [dispatch]);

  const InputValues = (e) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "name":
        setNewName(value);
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

    onSubmit({
      newName,
      number,
    });

    resetInputValues();
  };

  const onSubmit = (newName, number, contactList) => {
    if (checkName(contactList, newName)) {
      return toast.error("Это имя уже существует");
    }
    dispatch(phonebookOperations.addContact(newName, number));
  };

  const checkName = (contactList, newName) => {
    return contactList?.some(({ name }) => name === newName);
  };

  const resetInputValues = () => {
    setNewName("");
    setNumber("");
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

//   addContact = (e) => {
//     e.preventDefault();

//     const checNumer = this.state.number;

//     if (checNumer === "") {
//       return toast.error("Введите номер");
//     }

//     this.props.onSubmit({
//       name: this.state.name,
//       number: this.state.number,
//     });
//     this.resetInputValues();
//   };

//   const checkName = (contactList, newName) => {
//   return contactList?.some(({ name }) => name === newName);
// };

// resetInputValues = () => {
//   this.setState({ name: "", number: "" });
// };

//   render() {
// const idName = shortid.generate();
// const idNumber = shortid.generate();

// return (
//   <form className={s.form} onSubmit={this.addContact}>
//     <label htmlFor={idName} className={s.labelName}>
//       Имя
//     </label>
//     <input
//       id={idName}
//       type="text"
//       name="name"
//       value={this.state.name}
//       onChange={this.InputValues}
//       autoComplete="off"
//     ></input>
//     <label htmlFor={idNumber} className={s.labelNumber}>
//       Номер
//     </label>
//     <input
//       id={idNumber}
//       type="tel"
//       pattern="^[ 0-9]+$"
//       name="number"
//       value={this.state.number}
//       onChange={this.InputValues}
//       autoComplete="off"
//     ></input>
//     <button className={s.btnForm} type="submite">
//       Добавить контакт
//     </button>
//   </form>
// );
//   }
// }

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
