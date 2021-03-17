import React from "react";
import { connect } from "react-redux";
import Navigation from "./Navigation";
import UserMenu from "./UserMenu";
import AuthNav from "./AuthNav";
import { authSelectors } from "../../redux/auth/";
import s from "../AppBar/Phonebook.module.css";

function NavBar({ IsAuthenticated }) {
  return (
    <div className={s.generalNavContainer}>
      <Navigation />
      {IsAuthenticated ? <UserMenu /> : <AuthNav />}
    </div>
  );
}

const mapStateToProps = (state) => ({
  IsAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(NavBar);
