import { useState } from 'react';




const signUpPage = () => {
  
  const [text, set] = useState('')
  const [text, setText] = useState('')
  const [text, setText] = useState('')
  const [text, setText] = useState('')
  const [text, setText] = useState('')
  
    return (
        <form className='signUp'>
            <h1>Will you be joining us? Sign in here.</h1>
            <div className='form-control'>
                <label>First Name</label>
                <input type='text' placeholder='first name'/>
            </div>
            <div className='form-control'>
                <label>Last Name</label>
                <input type='text' placeholder='Last name'/>
            </div>
            <div className='form-control'>
                <label>Phone Number</label>
                <input type='text' placeholder='Enter a phone number'/>
            </div>
            <div className='form-control'>
                <label>Email</label>
                <input type='text' placeholder='Enter an email'/>
            </div>
            <div className='form-control'>
                <label>Food Allergies</label>
                <input type='text' placeholder='Food Allergies? Yes or No, if yes which ones'/>
            </div>
            <div className='form-control'>
                <label>Bringing Guest(s)</label>
                <input type='checkbox' />
            </div>
            <input type='submit' value='Save Contact'/>


            
        </form>
    )
}

export default signUpPage
