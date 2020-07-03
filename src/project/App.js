import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ProductsProvider } from "../contexts/ProductsContext";
import ProductsPage from "./Main/ProductsPage/ProductsPage";
import LandingPage from "./Main/LandingPage/LandingPage";
import Navbar from "./Navbar/Navbar";
import AddProductForm from "./Main/AddProductForm/AddProductForm";
import SignIn from "./Main/SignIn/SignIn";
import Cart from "./Main/Cart/Cart";
import SignUp from "./Main/SignUp/SignUp";
import ProductInfoPage from "./Main/ProductInfoPage/ProductInfoPage";
import ReviewPage from "./Main/ReviewPage/ReviewPage";

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
            <Route path="/rate-us">
              <ReviewPage />
            </Route>
            <Route path="/product/:id">
              <ProductInfoPage />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/products">
              <ProductsPage />
            </Route>
          </Switch>
        </Router>
      </ProductsProvider>
    </div>
  );
};

export default App;
