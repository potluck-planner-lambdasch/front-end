import React, { useState, useEffect } from 'react';

import { axiosWithAuth } from './../utils/axiosWithAuth';
import HostedPotluck from './HostedPotluck';

const PotluckPage = () => {
    const [potlucks, setPotlucks] = useState([]);
    

    useEffect(() => {
        axiosWithAuth()
        .get('/potluck')
        .then(res => {
            console.log(res);
            setPotlucks(res.data)
        })
        .catch(err => {console.log(err)})
    },[])

    

    return(
        <div>
            <h3>Upcoming Potlucks</h3>
            {potlucks.map(potluck => (
                <HostedPotluck potlucks={potlucks} setPotlucks={setPotlucks} potluck={potluck} />
            ))}
            
        </div>
    )
}

export default PotluckPage;