import React, { useState } from 'react'
import { axiosWithAuth } from './../utils/axiosWithAuth';
import { Link } from 'react-router-dom'
import SearchFriend from './SearchFriend'
import PrivateRoute from './PrivateRoute';

export default function HostedPotluck(props) {
    const { potluck } = props

    // const [inviteFriend, setInviteFriend] = useState({})

    // const onChange = (e) => {
    //     const { name, value } = e.target
    //     setInviteFriend({[name]: value})
    // }
    // const onSubmit = () => {
    //     axiosWithAuth()
    //     .post(`/potluck/${potluck.potluck_id}/guests`, inviteFriend)
    //     .then(res => {
    //         console.log(res);
    //     })
    //     .catch(err => {console.log(err)})
    // }

    return (
        
        <div key={potluck.potluck_id}>
                    <p>Location: {potluck.location} Date/Time: {potluck.dateTime} </p>
                    <Link to='/potluck/invite'>Invite Friends</Link>
                    <PrivateRoute path='/potluck/invite'>
                        <SearchFriend potluck={potluck}/>
                    </PrivateRoute>
                    {/* <form onSubmit={onSubmit}>
                        <button>Invite</button>
                        <label>
                            <input
                            key={potluck.potluck_id}
                            id={potluck.potluck_id}
                            name='friend'
                            type='text'
                            value={inviteFriend.friend}
                            onChange={onChange}
                            />
                        </label>

                    </form>  */}
                </div>
                
    )
}