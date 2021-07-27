import logo from './logo.svg';
import './App.css';
import Login from './Login'
import { Link } from 'react-router-dom'
import signUpPage from './signUpPage'

function App() {
  return (
    <div className="App">
      <header className="App-header">


        <Link to='/login'>Log in</Link>
        <Login/>
      
      <signUpPage />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload unit 4 build week.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
