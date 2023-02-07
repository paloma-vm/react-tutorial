import logo from './logo.svg';
import './App.css';

import Title from './Title';
import POPOSList from './POPOSList';
import MyComp from './MyComp';


function App() {
  return (
    <div className="App">
     <Title />
     <POPOSList />
     <MyComp message="Hello World" value={42} data={[1,2,3]} />
     <img src={logo} alt=""/>
    </div>
  );
}

export default App;
