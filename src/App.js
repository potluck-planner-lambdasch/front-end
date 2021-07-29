import React from 'react';


import Login from './Login'
import { Link } from 'react-router-dom'
import SignUpPage from './components/SignUpPage';
function App() {
  return (
    <div className="App">
      <header className="App-header">


        <Link to='/login'>Log in</Link>
        <Login/>
        <Link to='./components/SignUpPage'>Sign Up!</Link>
       <SignUpPage />
        
        
      </header>
    </div>
  );
}

export default App;
