import { useState } from 'react';




const signUpPage = () => {
  
  const [name, setName] = useState('')
  const [lname, setLName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [allergies, setAllergies] = useState('')
  const [guests, setGuests] = useState(false)

    return (
        <form className='signUp'>
            <h1>Will you be joining us? Sign in here.</h1>
            <div className='form-control'>
                <label>First Name</label>
                <input type='text' placeholder='first name' value={name} onChange={(e) =>setName(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Last Name</label>
                <input type='text' placeholder='Last name'value={lname} onChange={(e) =>setLName(e.target.value)}/>
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
            <input type='submit' value='Save Contact'/>


            
        </form>
    )
}

export default signUpPage
