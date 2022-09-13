import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1>React JS</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div className="hello-content">
        <h1>Hello World!</h1>
        <p>
          You can't change how people act, but what you can change is how you react.
          How people treat you is their karma; how you react is yours. It's not what happens to you,
          but how you react to it that matters. Life is 10% what happens to you and 90% how you react to it.
        </p>
      </div>
    </div>
  );
}


export default App;
