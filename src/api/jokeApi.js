import Axios from "axios";

import axios from 'axios'

export const fetchJokeAPI = () => (axios.post('http://api.icndb.com/jokes/random/1')
    .then(res => {
        return ({ text: res.data.value[0].joke });
    }))