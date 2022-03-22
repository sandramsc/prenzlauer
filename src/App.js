/* Designed & coded by Sandra Ashipala 03.02.2022 <https://github.com/sajustsmile> */
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import GlobalFonts from './fonts/fonts';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    //BEM naming convention
    <Router>
      <div className="app">
      <Header />
        <Switch>
        <Route path="/login">
           <h1>Login</h1>
           </Route>
        <Route path="/checkout">
            <Checkout />
            <GlobalFonts />
          </Route>
          <Route path="/">
            <Home />
            <GlobalFonts />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
