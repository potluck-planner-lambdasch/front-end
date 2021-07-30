import { Route, useHistory } from 'react-router-dom'
import React, { useState } from 'react'
import axios from 'axios'

const initialFormValues = {
    "username":'',
    "password":''
}

export default function SignUp(props) {
    const { baseURL } = props
    const [values, setValues] = useState(initialFormValues)

    const { push } = useHistory()

    const onChange = (evt) => {
        const { name, value } = evt.target;
        setValues({
        ...values, [name]: value
    });
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
    const newUser = {username: values.username, password: values.password};
    console.log(newUser)
    axios
      .post(`${baseURL}/auth/register`, newUser)
      .then((res) => {
        console.log(res.data);
        push('/')
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log("done");
        setValues(initialFormValues)
      });
    }


    return (
        <>
        <Route path='/signup'>
        <div>Sign Up
        <form onSubmit={onSubmit}>
            <label>Username
                <input
                    name='username'
                    type='text'
                    value={values.username}
                    onChange={onChange}
                />
            </label>
            <label>Password
                <input
                    name='password'
                    type='text'
                    value={values.password}
                    onChange={onChange}
                />
            </label>
            <button>Sign Up</button>
        </form>

        </div>
        </Route>
        </>
    )
}