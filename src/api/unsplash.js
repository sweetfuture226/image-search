import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID -V2zDgIX6ca_soju0P81Iir2Ae-TKrfgTgBcN74Jr3M'
    }
});
