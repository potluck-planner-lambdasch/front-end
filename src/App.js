import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Link to='/login'>Log in</Link>

        <Route path='/login'>
        <div class='login'>
          <form>
            <label>Username
              <input
                type='text'
                name='username'
                id='username'
              />
            </label>
            <label>Password
              <input
                type='password'
                name='password'
                id='password'
              />
            </label>
          </form>
        </div>
        </Route>
      
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
