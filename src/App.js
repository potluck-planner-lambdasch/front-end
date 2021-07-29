import "./App.css";
import Login from "./Login";
import CreatePotluck from './CreatePotluck'
// import Potlucks from './Potlucks'
import { NavLink} from "react-router-dom";
import styled from "styled-components";

import PrivateRoute from './components/PrivateRoute';
import PotluckPage from './components/PotluckPage';


const baseURL = "https://jaden-build-week-4.herokuapp.com/api";


const NavStyled = styled.nav`
  width:50vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 30%;
`;
const HeaderStyled = styled.header`
  display: flex;
  justify-content:space-around;
  height: 8vw;
  align-items:center;
  border-radius:20px;
  border: 3px solid;
  border-color:black;
  
`
const H2Styled = styled.h2`
  font-size: 3.5vw;
  
`

function App() {
  return (
    <>
    <div className="App">
      <div style={{width:'98%',margin:'1%'}}>
      <HeaderStyled className="App-header">
        <div style={{width:'35%', padding:'0 2%'}}>
          <H2Styled>Potluck Planner</H2Styled>
        </div>
        <NavStyled>
          <NavLink style={{textDecoration: 'none',
                          fontSize:'2.5vw', 
                          color:'white'}} 
                          to="/">Home</NavLink>
          <NavLink style={{textDecoration: 'none',
                          fontSize:'2.5vw', 
                          color:'white'}}
                          to="/CreatePotluck">CreatePotluck</NavLink>
        </NavStyled>
      </HeaderStyled>
      </div>
      <Login baseURL={baseURL}/>
      <CreatePotluck baseURL={baseURL}/>
      {/* <Potlucks baseURL={baseURL}/> */}
      <PrivateRoute path='/potluck' component={PotluckPage} />
      
    </div>
    
    </>
  );
}

export default App;