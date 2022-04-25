<<<<<<< HEAD
/* Designed & coded by Sandra Ashipala 03.02.2022 <https://github.com/sandramsc> */
=======
/* Designed & coded by Sandra Ashipala 20.04.2022 <https://github.com/sandramsc> */
>>>>>>> d95051041286607c9d23803dee101fe9d3924554
import axios from 'axios';

const instance = axios.create ({
    //API (cloud function -- firebase emulators) URL
    baseURL: 'http://localhost:5001/prenzlauer-fad3c/us-central1/api'
})

export default instance;
