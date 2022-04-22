/* Designed & coded by Sandra Ashipala 20.04.2022 <https://github.com/sandramsc> */
import axios from 'axios';

const instance = axios.create ({
    //API (cloud function -- firebase emulators) URL
    baseURL: 'http://localhost:5001/prenzlauer-fad3c/us-central1/api'
})

export default instance;
