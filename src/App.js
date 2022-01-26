import './App.css';
import { animals } from './data.js';
import Header from './Header/Header.js';
import Main from './Main/Main.js';
import Footer from './Footer/Footer.js';

function App() {
  return (
    <div className="App">
      <div>
        <Header name="Joey Joe Jo Shabadoo" />
        <Main animals = {{ animals }} />
        <Footer email="animal@farm.com" />
      </div>
    </div>
  );
}

export default App;
