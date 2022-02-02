/* Designed & coded by Sandra Ashipala 03.02.2022 <https://github.com/sajustsmile> */
import Header from './Header';
import GlobalFonts from './fonts/fonts';
import './App.css';

function App() {
  return (
    //BEM naming convention
    <div className="app">
    <h1></h1>
    <Header />
    <GlobalFonts />
    {/* Home */}
    </div>
  );
}

export default App;
