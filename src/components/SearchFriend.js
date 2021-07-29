import axios from "axios";
import React, { useEffect, useState } from "react"
import { axiosWithAuth } from './../utils/axiosWithAuth';

export default function SearchFriend(props) {
    const { potluck } = props
    const [friends, setFriends] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    const onChange = (e) => {
        const { name, value, id } = e.target
        setSearchTerm({[name]:value})
        console.log(searchTerm)
        console.log(potluck.potluck_id)
    }
    useEffect(() => {
        axiosWithAuth()
        .get('/users')
        .then(res => console.log(res.data))
        .catch(err => console.log (err))
    }, [searchTerm])
    

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
                value={searchTerm.searchFriend}
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