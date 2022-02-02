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
