// import React, { useState } from 'react'
// import { axiosWithAuth } from './../utils/axiosWithAuth';
import { Link } from 'react-router-dom'
import InviteFriend from './InviteFriend'
import PrivateRoute from './PrivateRoute';
import DeletePotluck from './DeletePotluck'
// import EditPotluck from './EditPotluck'

export default function HostedPotluck(props) {
    const { potlucks, potluck, setPotlucks } = props

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
                    <PrivateRoute path='/potluck/invite/'>
                        <InviteFriend potluck={potluck}/>
                    </PrivateRoute>
                    {/* <EditPotluck/> */}
                    <DeletePotluck potlucks={potlucks} setPotlucks={setPotlucks} potluck={potluck}/>
                </div>
                
    )
}