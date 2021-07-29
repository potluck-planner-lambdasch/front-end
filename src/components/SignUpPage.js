import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';


// SignUpPage.propTypes = {
// username: PropTypes.string.isRequired;
// password: PropTypes.string.isRequired
// }


const SignUpPage = () => {
  

  const [name, setName] = useState('')
  
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [allergies, setAllergies] = useState('')
  const [guests, setGuests] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  

    return (
        <form className='signUp'>
            <h1>Will you be joining us? Sign in here.</h1>

            <div className='form-control'>
                <label>Username</label>
                <input type='text' placeholder='Username'value={username} onChange={(e) =>setUsername(e.target.value)}/>
            </div>

            <div className='form-control'>
                <label>Password</label>
                <input type='text' placeholder='Password'value={password} onChange={(e) =>setPassword(e.target.value)}/>
            </div>

            <div className='form-control'>
                <label> Name</label>
                <input type='text' placeholder='First and Last Name' value={name} onChange={(e) =>setName(e.target.value)}/>
            </div>
           
            <div className='form-control'>
                <label>Phone Number</label>
                <input type='text' placeholder='Enter a phone number' value={phone} onChange={(e) =>setPhone(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Email</label>
                <input type='text' placeholder='Enter an email' value={email} onChange={(e) =>setEmail(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Food Allergies</label>
                <input type='text' placeholder='Food Allergies? Yes or No, if yes which ones'value={allergies} onChange={(e) =>setAllergies(e.target.value)}/>
            </div>
           <div className='form-control'>
                <label>Bringing Guest(s)</label>
                <input type='checkbox' value={guests} onChange={(e) =>setGuests(e.currentTarget.checked)}/>
            </div>
            <input type='submit' value='Save Contact' className='btn'/>


            
        </form>
    )
}

export default SignUpPage
