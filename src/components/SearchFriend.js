import axios from "axios";
import React, { useEffect, useState } from "react"
import { axiosWithAuth } from './../utils/axiosWithAuth';

const initialFormValue = ''
export default function SearchFriend(props) {
    const { potluck } = props
    const [friends, setFriends] = useState([])
    const [searchTerm, setSearchTerm] = useState(initialFormValue)


    useEffect(() => {
        axiosWithAuth()
        .get('/users')
        .then(res => {
            // console.log(res.data)
            setFriends(res.data)
            // console.log(filteredFriends)
            // setFriends([filteredFriends])
            console.log(friends)
            console.log('test')
        })
        .catch(err => console.log (err))
    }, [])  

    const filteredFriends = () => {
        return friends.filter(friend => friend.username.includes(searchTerm));
    }
    
    const onChange = (e) => {
        const { name, value, id } = e.target
        setSearchTerm(value)
        console.log(searchTerm)
        // setFriends(filteredFriends())
        // console.log('friends',friends)           
    }
    
    const onSubmit = (e) => {
        e.preventDefault();
        let result = filteredFriends()
        console.log(result)
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
            <button>Select</button>
        </form>
        </div>
        <div>

        </div>
        </>
    )
}