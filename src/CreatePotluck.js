import { Route, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import React, { useState, useEffect } from 'react'
import schema from "./validation/createSchema";
import { reach } from "yup";
import axios from 'axios'
import { axiosWithAuth } from './utils/axiosWithAuth';

const CreatePotluckBox = styled.div`
  background-color: lightsteelblue;
  color: white;
  width:98%;
  height: 40vw;
  padding:0 0 10% 0;
  margin: 1%;
  display:flex;
  align-items:center;
  justify-content:center;
  border-radius:20px;
  border: 3px solid black;
`
const FormFieldBox = styled.div`
    width:40%;
    display:flex;
    flex-direction:column;
`
const ErrorDiv = styled.div`
  display:block;
  height:5vw;
  font-size:2vw;
  color:red;
`

const initialFormValues = {
    dateTime:'',
    location:''
}
const initialFormErrors = {
    dateTime:'',
    location:''
}

export default function CreatePotluck(props) {
    const { baseURL } = props
    const [values, setValues] = useState(initialFormValues)
    const [disable, setDisable] = useState(true);
    const [formErrors, setFormErrors] = useState(initialFormErrors);

    const { push } = useHistory();

    const validate = (name, value) => {
        reach(schema, name)
          .validate(value)
          .then(() => setFormErrors({ ...formErrors, [name]: "" }))
          .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
      };
    
      const onChange = (evt) => {
        const { name, value } = evt.target;
        validate(name, value);
        setValues({ ...values, [name]: value });
      };
    
      useEffect(() => {
        schema.isValid(values).then((valid) => setDisable(!valid));
      }, [values]);

      const onSubmit = (evt) => {
        evt.preventDefault()
        axiosWithAuth()
        .post('/potluck',values)
        .then(res => {
          console.log(res);
          push('/potluck')
        })
        .catch(err=>{console.log(err)})
        // const newPotluck = {
        //   dateTime: values.dateTime,
        //   location: values.location
          
        // }
        // axios.post(`${baseURL}/potluck`,newPotluck)
        // .then((res) => console.log(res.data))
        // .catch((err) => {
        //   console.log(err);
        // })
        // .finally(() => {
        //   console.log("done");
        //   setValues(initialFormValues)
        // })
      }

    return(
        <Route path='/CreatePotluck/'>
        <CreatePotluckBox>
        <form onSubmit={onSubmit} style={{display:'flex', flexDirection:'column',alignItems:'center', width:'95%'}}>
                <FormFieldBox>
                <label style={{fontSize:'2.5vw'}}>When
                    <input
                    type="datetime-local"
                    name="dateTime"
                    value={values.dateTime}
                    id="dateTime"
                    placeholder='set the time and date'
                    onChange={onChange}
                    />
                </label>
                <ErrorDiv className="errors">{formErrors.dateTime}</ErrorDiv>
                </FormFieldBox>
                
                <FormFieldBox>
                <label style={{fontSize:'2.5vw'}}>Where
                    <input
                    type="text"
                    name="location"
                    value={values.location}
                    id="location"
                    placeholder='location'
                    onChange={onChange}
                    />
                </label>
                <ErrorDiv className="errors">{formErrors.location}</ErrorDiv>
                </FormFieldBox>
                <button style={{width:'10%'}} disabled={disable}>Create</button>
            </form>
        </CreatePotluckBox>
        </Route>
    )
}