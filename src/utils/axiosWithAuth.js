import axios from 'axios';

export const axiosWithAuth = () => {
    const token = window.localStorage.getItem('token');

    return axios.create({
        headers:{
            Authorization: token,
        },
        baseURL:'https://jaden-build-week-4.herokuapp.com/api'
    });
}

