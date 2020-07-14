import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ProductsProvider } from "../contexts/ProductsContext";
import { gluggiFirestore, REVIEWS } from "../firebase/firebase";

import ProductsPage from "./Main/ProductsPage/ProductsPage";
import LandingPage from "./Main/LandingPage/LandingPage";
import Navbar from "./Navbar/Navbar";
import AddProduct from "./Main/AddProduct/AddProduct";
import SignIn from "./Main/SignIn/SignIn";
import Cart from "./Main/Cart/Cart";
import SignUp from "./Main/SignUp/SignUp";
import ProductInfoPage from "./Main/ProductInfoPage/ProductInfoPage";
import AddReview from "./Main/AddReview/AddReview";
import Admin from "./Main/Admin/Admin";
import Reviews from "./Main/LandingPage/FeaturedReviews/Reviews/Reviews";

const App = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = gluggiFirestore
      .collection(REVIEWS)
      .onSnapshot((snapshot) => {
        if (snapshot.size) {
          let myReviews = [];
          snapshot.forEach((doc) =>
            myReviews.push({ id: doc.id, ...doc.data() })
          );
          setReviews(myReviews);
          setIsLoading(false);
        } else {
          console.log("Collection empty or something went wrong");
        }
      });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      <ProductsProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact>
              <LandingPage reviews={reviews} isLoading={isLoading} />
            </Route>
            <Route path="/sign-up" component={SignUp} />
            <Route path="/sign-in" component={SignIn} />
            <Route path="/add-product" component={AddProduct} />
            <Route path="/rate-us" component={AddReview} />
            <Route path="/product/:id" component={ProductInfoPage} />
            <Route path="/cart" component={Cart} />
            <Route path="/products" component={ProductsPage} />
            <Route path="/reviews">
              <Reviews reviews={reviews} />
            </Route>
            <Route path="/admin" component={Admin} />
          </Switch>
        </Router>
      </ProductsProvider>
    </div>
  );
};

export default App;
