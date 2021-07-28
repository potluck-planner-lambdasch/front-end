// import axios from "axios";
// import React, { useState } from 'react'

// export default function Potlucks(props) {
//     const { baseURL } = props

//     const [hostPotlucks, setHostPotlucks] = useState([])
//     const [guestPotlucks, setGuestPotlucks] = useState([])


//     axios.get(`${baseURL}/potluck`)
//         .then(res => setCreatedPotlucks(res.data))
//         .catch(err=>console.log(err))
//         .finally(()=> console.log('done'))

//     axios.get(`${baseURL}/`)
    
//     return(
//         <div>
//             {
//             hostPotlucks.map((obj) => {
//                 <CreatedPotluck dateTime={obj.dateTime} location={obj.location}/>

//                 <GuestPotluck/>
//             })

//             }
//         </div>
//     )
// }