import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Route, Switch } from "react-router-dom";
import HatsPage from "./pages/hats/hatspage.component";
import ShopPage from "./pages/shop/shoppage.component";

function App() {
  return (
    <div>
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
