import React, { useState, useEffect } from 'react';

import { axiosWithAuth } from './../axiosWithAuth';

const PotluckPage = (props) => {
    const [potlucks , setPotlucks] = useState([]);

    useEffect(() => {
        axiosWithAuth()
        .get('/potluck')
        .then(res => {
            console.log(res);
            setPotlucks(res.data);
        })
        .catch(err=>{console.log(err)})
    },[])

    return(
        <div>
            <h3>Upcoming Potlucks</h3>
            {potlucks.map(potluck => (
                <p key={potluck.id}>{potluck.name}</p>
            ))}
        </div>
    )
}

export default PotluckPage;