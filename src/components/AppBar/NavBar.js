import React from "react";
import { useSelector } from "react-redux";
import Navigation from "./Navigation";
import UserMenu from "./UserMenu";
import AuthNav from "./AuthNav";
import { authSelectors } from "../../redux/auth/";
import s from "../AppBar/Phonebook.module.css";

export default function NavBar() {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);
  return (
    <div className={s.generalNavContainer}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </div>
  );
}
