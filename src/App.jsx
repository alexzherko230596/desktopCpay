import './App.scss';
import HomePage from './screens/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <img src={require('./img/svg/Noise.png')} className='noize'/>
      <HomePage />
    </div>
  );
}

export default App;
