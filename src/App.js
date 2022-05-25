import logo from './logo.svg';
import './App.css';
import Intro from './Pages/Intro';

function App() {
  return (
    <div>
      <Intro/>
      <img src={require('../src/Assets/Images/1.jpg')}/>
    </div>
  );
}

export default App;
