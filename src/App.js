/* Designed & coded by Sandra Ashipala 03.02.2022 <https://github.com/sajustsmile> */
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import GlobalFonts from './fonts/fonts';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
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
