/* Designed & coded by Sandra Ashipala 03.02.2022 <https://github.com/sajustsmile> */
import React, {useEffect}from 'react';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import GlobalFonts from './fonts/fonts';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { auth } from "./firebase";
import {useStateValue} from "./StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    //BEM naming convention
    <Router>
      <div className="app">
        <Switch>
        <Route path="/login">
          <Login />
           </Route>
        <Route path="/checkout">
            <Header />
            <Checkout />
            <GlobalFonts />
          </Route>
          <Route path="/">
            <Header />
            <Home />
            <GlobalFonts />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
