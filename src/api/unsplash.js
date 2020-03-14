import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:'Client-ID zj_TLqNxUcgUanIA9SIR20E1lNuT1qoYKSFHE_I5ERs'
    }
});