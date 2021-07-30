import { axiosWithAuth } from '../utils/axiosWithAuth';
import React from 'react'
import {useHistory} from 'react-router-dom'

export default function DeletePotluck(props) {
    const { potlucks, potluck, setPotlucks } = props

    const { push } = useHistory()

    const onClick = () => {
        axiosWithAuth()
        .delete(`/potluck/${potluck.potluck_id}`)
        .then(res => {
            const newArray = potlucks.filter(pluck => pluck.potluck_id !== potluck.potluck_id
            )
            console.log(res.data)
            setPotlucks(newArray)
        })
        .catch(err => console.log (err), console.log(potluck.potluck_id))
        .finally(() => push('/potluck'))
    }

    return (
        <>
        <button onClick={onClick}>Delete</button>
        </>
    )
}