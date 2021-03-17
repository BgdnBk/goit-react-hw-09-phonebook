import React, { Component, Suspense, lazy } from "react";
import { connect } from "react-redux";
import { Switch } from "react-router";
import "./App.css";
import s from "./components/ContactForm/ContactForm.module.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "./components/AppBar/NavBar";
import authOperations from "./redux/auth/auth-operations";
import PrivateRoute from "./components/AppBar/PrivateRoute";
import PublicRoute from "./components/AppBar/PublicRoute";

const HomeView = lazy(() => import("./components/views/HomeView"));
const LoginView = lazy(() => import("./components/views/LoginView"));
const RegistrView = lazy(() => import("./components/views/RegistrView"));
const ContactsView = lazy(() => import("./components/views/ContactsView"));

// export default function App() {
//   return <div></div>;
// }

class Phonebook extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <div className={s.container}>
        <NavBar />
        <ToastContainer autoClose={3000} />
        <Suspense fallback={<p>Сейчас всё будет</p>}>
          <Switch>
            <PublicRoute exact path="/" component={HomeView} />
            <PublicRoute
              path="/registration"
              restricted
              redirectTo="/contacts"
              component={RegistrView}
            />
            <PublicRoute
              path="/login"
              restricted
              redirectTo="/contacts"
              component={LoginView}
            />
            <PrivateRoute
              exact
              path="/contacts"
              redirectTo="/login"
              component={ContactsView}
            />
          </Switch>
        </Suspense>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(Phonebook);
