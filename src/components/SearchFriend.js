import axios from "axios";
import React, { useEffect, useState } from "react"
import { axiosWithAuth } from './../utils/axiosWithAuth';

export default function SearchFriend(props) {
    const { potluck } = props
    const [friends, setFriends] = useState([])
    const [searchTerm, setSearchTerm] = useState('')


    let friendsArray = []
    useEffect(() => {
        axiosWithAuth()
        .get('/users')
        .then(res => {
            console.log(res.data)
            friendsArray = res.data
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
    }
    
    useEffect(() => {
        console.log('useEffect filter runs')
        const filteredFriends = friendsArray.filter(friend => {
            friend.username.length()
            // friend.username.includes(searchTerm, 0)
            // setFriends(filteredFriends)
            console.log(filteredFriends)
        })
        
        
    },[onChange])
    
        
        // setSearchTerm(value)
        
        // console.log(searchTerm)
        // console.log(potluck.potluck_id)
    
    

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