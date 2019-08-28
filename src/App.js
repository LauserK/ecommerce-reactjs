import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import { HomePage } from "./pages/HomePage/home-page";
import ShopPage from "./pages/ShopPage/shop-page";
import { Header } from "./components/header/header";
import { SignIn } from "./pages/SignIn/sign-in";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignIn} />
      </Switch>
    </div>
  );
}

export default App;
