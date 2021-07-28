import "./App.css";
import Login from "./Login";
import { Link } from "react-router-dom";
// import styled from "styled-components";


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import PotluckPage from "./components/PotluckPage";

// const NavStyled = styled.nav`
//   display: flex;
//   justify-content: space-around;
//   align-items: center;
//   width: 30%;
// `;
// const HeaderStyled = styled.header`
//   display: flex;
//   height: 8vw;
//   align-items:center;
//   border-radius:20px;
//   border: 3px solid;
//   border-color:black;
  
// `
// const H2Styled = styled.h2`
//   font-size: 3.5vw;
  
// `

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Potluck Planner</h1>
        {/* <div style={{width:'98%',margin:'1%'}}>
        <HeaderStyled className="App-header">
          <div style={{width:'35%', padding:'0 2%'}}>
            <H2Styled>Potluck Planner</H2Styled>
          </div>
          <NavStyled>
            <Link 
            style={{textDecoration: 'none', fontSize:'2.5vw', color:'white'}} 
            to="/"
            >Home
            </Link>
            <Link 
            style={{textDecoration: 'none', fontSize:'2.5vw', color:'white'}} 
            to="/login"
            >Log in
            </Link>
          </NavStyled>
        </HeaderStyled>
        </div>
        <div> */}
        <Link to='/register'>Register</Link>

        <Switch>

          <PrivateRoute path='/potluck' component={PotluckPage} />
          

          <Route path='/login'>
            <Login/>
          </Route>


        </Switch>

      

      </div>

    
    </Router>
  );
}

export default App;
