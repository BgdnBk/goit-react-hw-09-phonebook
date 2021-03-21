import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import { authOperations } from "../../redux/auth";
import s from "../AppBar/Phonebook.module.css";

export default function LoginView({ onLogin }) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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

    dispatch(authOperations.login({ email, password }));

    resetLogin();

    // this.setState({ name: "", email: "", password: "" });
  };

  const resetLogin = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <div className={s.conteiner}>
      <h1>Логин </h1>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label className={s.labelName}>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            className={s.label}
          />
        </label>
        <label className={s.labelName}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            className={s.label}
          />
        </label>
        <button type="submit" className={s.buttonLogin}>
          Войти
        </button>
      </form>
    </div>
  );
}

// class LoginView extends Component {
//   state = {
//     email: "",
//     password: "",
//   };

// handleChange = ({ target: { name, value } }) => {
//   this.setState({ [name]: value });
// };

// handleSubmit = (e) => {
//   e.preventDefault();

//   this.props.onLogin(this.state);

//   this.setState({ name: "", email: "", password: "" });
// };

//   render() {
// const { email, password } = this.state;

// return (
//   <div className={s.conteiner}>
//     <h1>Логин </h1>
//     <form onSubmit={this.handleSubmit} autoComplete="off">
//       <label className={s.labelName}>
//         Email
//         <input
//           type="email"
//           name="email"
//           value={email}
//           onChange={this.handleChange}
//           className={s.label}
//         />
//       </label>
//       <label className={s.labelName}>
//         Password
//         <input
//           type="password"
//           name="password"
//           value={password}
//           onChange={this.handleChange}
//           className={s.label}
//         />
//       </label>
//       <button type="submit" className={s.buttonLogin}>
//         Войти
//       </button>
//     </form>
//   </div>
// );
//   }
// }

// const mapDispatchToProps = {
//   onLogin: authOperations.login,
// };

// export default connect(null, mapDispatchToProps)(LoginView);
