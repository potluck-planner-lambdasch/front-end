// import { axiosWithAuth } from '../utils/axiosWithAuth';
// import React from 'react'
// import {useHistory} from 'react-router-dom'

// export default function EditPotluck(props) {
//     const { potluck } = props

//     const { push } = useHistory()

//     const onClick = () => {
//         axiosWithAuth()
//         .delete(`/potluck/${potluck.potluck_id}`)
//         .then(res => {
//             console.log(res.data)
//         })
//         .catch(err => console.log (err), console.log(potluck.potluck_id))
//         .finally(() => push('/potluck'))
//     }

//     return (
//         <>
//         <button onClick={onClick}>Edit</button>
//         </>
//     )
// }