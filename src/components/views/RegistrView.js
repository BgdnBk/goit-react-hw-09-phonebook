import React, { useState } from "react";
import { connect } from "react-redux";
import { authOperations } from "../../redux/auth";
import s from "../AppBar/Phonebook.module.css";

export default function RegistrView({ onLogin }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        return setName(value);
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);

      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onLogin(this.state);

    resetLogin();

    // this.setState({ name: "", email: "", password: "" });
  };

  const resetLogin = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <div className={s.conteiner}>
      <h1> Регистрация</h1>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          name
          <input
            value={name}
            name="name"
            type="name"
            onChange={handleChange}
            className={s.label}
          />
        </label>
        <label>
          Email
          <input
            value={email}
            name="email"
            type="email"
            onChange={handleChange}
            className={s.label}
          />
        </label>
        <label>
          Password
          <input
            value={password}
            name="password"
            type="password"
            onChange={handleChange}
            className={s.label}
          />
        </label>
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
}

// class RegistrView extends Component {
//   state = {
//     name: "",
//     email: "",
//     password: "",
//   };

//   handleChange = ({ target: { name, value } }) => {
//     this.setState({ [name]: value });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();

//     this.props.onRegister(this.state);

//     this.setState({ name: "", email: "", password: "" });
//   };

//   render() {
//     const { name, email, password } = this.state;
//     return (
//       <div className={s.conteiner}>
//         <h1> Регистрация</h1>
//         <form onSubmit={this.handleSubmit} autoComplete="off">
//           <label>
//             name
//             <input
//               value={name}
//               name="name"
//               type="name"
//               onChange={this.handleChange}
//               className={s.label}
//             />
//           </label>
//           <label>
//             Email
//             <input
//               value={email}
//               name="email"
//               type="email"
//               onChange={this.handleChange}
//               className={s.label}
//             />
//           </label>
//           <label>
//             Password
//             <input
//               value={password}
//               name="password"
//               type="password"
//               onChange={this.handleChange}
//               className={s.label}
//             />
//           </label>
//           <button type="submit">Зарегистрироваться</button>
//         </form>
//       </div>
//     );
//   }
// }

// const mapDispatchToProps = {
//   onRegister: authOperations.register,
// };

// export default connect(null, mapDispatchToProps)(RegistrView);
