import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import { HomePage } from "./pages/HomePage/home-page";
import ShopPage from "./pages/ShopPage/shop-page";
import { Header } from "./components/header/header";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
