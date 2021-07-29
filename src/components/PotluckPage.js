import React, { useState, useEffect } from 'react';

import { axiosWithAuth } from './../utils/axiosWithAuth';

const PotluckPage = (props) => {
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
                <div key={potluck.potluck_id} >
                    <p key={potluck.potluck_id}>Location: {potluck.location} Date/Time: {potluck.dateTime} </p>
                    <form>
                        <label>Invite:
                            <input
                            name='friend'
                            type='text'
                            
                            />
                        </label>
                    </form> 
                </div>
            ))}
            
        </div>
    )
}

export default PotluckPage;