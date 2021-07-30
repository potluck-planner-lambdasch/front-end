import React, { useEffect, useState } from "react"
import { axiosWithAuth } from '../utils/axiosWithAuth';
import InviteButton from './InviteButton'

const initialFormValue = ''
export default function InviteFriend(props) {
    const { potluck } = props
    const [friends, setFriends] = useState([])
    const [searchTerm, setSearchTerm] = useState(initialFormValue)
    const [invite, setInvite] = useState([])


    useEffect(() => {
        axiosWithAuth()
        .get('/users')
        .then(res => {
            // console.log(res.data)
            setFriends(res.data)
            // console.log(filteredFriends)
            // setFriends([filteredFriends]
            console.log('test')
        })
        .catch(err => console.log (err))
    },[])  

    const filteredFriends = () => {
        return friends.filter(friend => friend.username.includes(searchTerm));
    }
    
    const onChange = (e) => {
        const { value } = e.target
        setSearchTerm(value)
        console.log(searchTerm)
        // setFriends(filteredFriends())
        // console.log('friends',friends)           
    }
    
    const onSubmit = (e) => {
        e.preventDefault();
        let result = filteredFriends()
        console.log(result)
        setInvite(result)
        console.log(invite)
        setSearchTerm(initialFormValue)

    }

    return (
        <>
        <div>
        <form onSubmit={onSubmit}>
            <label>
            <input
                id={potluck.potluck_id}
                placeholder='search for friend'
                name='searchFriend'
                type='text'
                value={searchTerm}
                onChange={onChange}
            />
            </label>
        </form>
        </div>
            {invite.map(user => {
                return <InviteButton potluck_id={potluck.potluck_id} user_id={user.user_id} username={user.username} setInvite={setInvite}/>
            })}
        </>
    )
}