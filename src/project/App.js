import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ProductsProvider } from "../contexts/ProductsContext";
import ProductList from "./Main/ProductList/ProductList";
import LandingPage from "./Main/LandingPage/LandingPage";
import Navbar from "./Navbar/Navbar";
import AddProductForm from "./Main/AddProductForm/AddProductForm";
import SignIn from "./Main/SignIn/SignIn";
import Cart from "./Main/Cart/Cart";
import SignUp from "./Main/SignUp/SignUp";
import ProductPage from "./Main/ProductList/ProductPage/ProductPage";

const App = () => {
  return (
    <div>
      <ProductsProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact>
              <LandingPage />
            </Route>
            <Route path="/sign-up">
              <SignUp />
            </Route>
            <Route path="/sign-in">
              <SignIn />
            </Route>
            <Route path="/addproduct">
              <AddProductForm />
            </Route>
            <Route path="/product/:id">
              <ProductPage />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/products">
              <ProductList />
            </Route>
          </Switch>
        </Router>
      </ProductsProvider>
    </div>
  );
};

export default App;
