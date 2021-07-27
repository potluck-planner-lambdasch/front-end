import { Route } from 'react-router-dom'
import styled from 'styled-components'

const CreatePotluckBox = styled.div`
  background-color: lightsteelblue;
  color: white;
  width:98%;
  height: 50vw;
  /* padding:0 0 5% 0; */
  margin: 1%;
  display:flex;
  align-items:center;
  justify-content:center;
  border-radius:20px;
  border: 3px solid black;

`

export default function CreatePotluck() {
    return(
        <Route path='/CreatePotluck'>
        <CreatePotluckBox>

        </CreatePotluckBox>
        </Route>
    )
}