import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase-utils";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import "./header.scss";

export const Header = ({ currentUser }) => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        Shop
      </Link>
      <Link className="option" to="/shop">
        Contact
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          Sign out
        </div>
      ) : (
        <Link className="option" to="/signin">
          Sign in
        </Link>
      )}
    </div>
  </div>
);