import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Route, Switch } from "react-router-dom";
import HatsPage from "./pages/hats/hatspage.component";
import ShopPage from "./pages/shop/shoppage.component";
import Header from "./components/header/header.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/shop/hats" component={HatsPage} />
        <Route path="/hats/:hatsId" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
