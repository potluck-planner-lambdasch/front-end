import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import schema from "./validation/loginSchema";
import { reach } from "yup";
import axios from "axios";
import styled from "styled-components";


const LoginBox = styled.div`
  background-color: lightsteelblue;
  color: white;
  width:98%;
  height: 25vw;
  padding:0 0 5% 0;
  margin: 1%;
  display:flex;
  align-items:center;
  justify-content:center;
  border-radius:20px;
  border: 3px solid black;

`

const ErrorDiv = styled.div`
  display:block;
  height:5vw;
  font-size:2vw;
  color:red;
`

const FormFieldBox = styled.div`
    width:40%;
`

export default function Login(props) {
  const { baseURL } = props
  const initialFormValues = { username: "", password: "" };
  const initialFormErrors = { username: "", password: "" };

  const [values, setValues] = useState(initialFormValues);
  const [disable, setDisable] = useState(true);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

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
    evt.preventDefault();
    const newUser = { username: values.username, password: values.password };
    axios
      .post(`${baseURL}/auth/login`, newUser)
      .then((res) => console.log(res.data))
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log("done");
        setValues(initialFormValues)
      });
  };

  return (
    <Route exact path="/">
        <LoginBox>
            <form style={{display:'flex',justifyContent:'space-around', width:'95%'}}onSubmit={onSubmit}>
                <FormFieldBox>
                <label style={{fontSize:'2.5vw'}}>
                    Username
                    <input
                    
                    type="text"
                    name="username"
                    value={values.username}
                    id="username"
                    onChange={onChange}
                    />
                </label>
                <ErrorDiv className="errors">{formErrors.username}</ErrorDiv>
                </FormFieldBox>
                <FormFieldBox>
                <label style={{fontSize:'2.5vw'}}>Password
                    <input
                    type="password"
                    name="password"
                    value={values.password}
                    id="password"
                    onChange={onChange}
                    />
                </label>
                <ErrorDiv className="errors">{formErrors.password}</ErrorDiv>
                </FormFieldBox>
                <button disabled={disable}>Login</button>
            </form>
            
        </LoginBox>
    </Route>
  );
}
