import React, { useState } from "react";
import { Route } from "react-router-dom";
import schema from "./validation/formSchema";
import { reach } from "yup";
import styled from "styled-components";

// const StyledDiv = styled.div`
//     display: flex;
//     margin:auto;
//     flex-direction: column;
// `

export default function Login() {
  const initialFormValues = { username: "", password: "" };
  const initialFormErrors = { username: "", password: "" };

  const [values, setValues] = useState(initialFormValues);
  const [disable, setDisable] = useState(true);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const validate = (name, value) => {
    reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => setFormErrors({...formErrors, [name]: err.errors[0]}));
  };

  const onChange = (evt) => {
    const { name, value } = evt.target;
    validate(name, value);
    setValues({ ...values, [name]: value });
  };

  return (
    <Route path="/login">
      <div class="login">
        <form>
          {/* <StyledDiv> */}
            <label>
              Username
              <input
                type="text"
                name="username"
                value={values.username}
                id="username"
                onChange={onChange}
              />
            </label>
            <div class="errors">{formErrors.username}</div>
          {/* </StyledDiv> */}
          <label>
            Password
            <input
              type="password"
              name="password"
              value={values.password}
              id="password"
              onChange={onChange}
            />
          </label>
          <div class="errors">{formErrors.password}</div>
          <button disabled={disable}>Login</button>
          
        </form>
      </div>
    </Route>
  );
}
