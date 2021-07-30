import React from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth';


export default function InviteButton(props) {
    const { potluck_id, setInvite, username, } = props

    function onClick() {
        let friend = {'friend':username}
        axiosWithAuth()
        .post(`potluck/${potluck_id}/guests`, friend)
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log(err))
        .finally(() => setInvite([]))
    }

    return (
        <button onClick={onClick}>Invite {username}</button>
    )
}
