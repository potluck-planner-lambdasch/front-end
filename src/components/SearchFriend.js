import axios from "axios";
import React, { useEffect, useState } from "react"
import { axiosWithAuth } from './../utils/axiosWithAuth';

export default function SearchFriend(props) {
    const { potluck } = props
    const [friends, setFriends] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [filteredName, setFilteredName] = useState('')

    let friendsArray = []
    useEffect(() => {
        axiosWithAuth()
        .get('/users')
        .then(res => {
            console.log(res.data)
            console.log(searchTerm)
            friendsArray = [...res.data]
            // console.log(filteredFriends)
            // setFriends([filteredFriends])
            console.log(friendsArray)
            console.log('test')
        })
        .catch(err => console.log (err))
    }, [])


    const onChange = (e) => {
        const { name, value, id } = e.target
        setSearchTerm(value)
        console.log(searchTerm)
        friendsArray.map((friend) => {
            if(friend.username.includes(value, 0)){
                console.log('made it here')
                setFilteredName(friend.username)
            }
        })
        console.log(filteredName)
        // setSearchTerm(value)
        
        // console.log(searchTerm)
        // console.log(potluck.potluck_id)
    }
    

    return (
        <>
        <div>
        <form>
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
        <div>

        </div>
        </>
    )
}