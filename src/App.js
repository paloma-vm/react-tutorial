import logo from './logo.svg';
import './App.css';

import Title from './Title';
import POPOSList from './POPOSList';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Title />
      <POPOSList />
      <Footer 
        name="Paloma Valdez-Marsh"
        copyright_year="copyright 2023"
      />
    </div>
  );
}

export default App;
