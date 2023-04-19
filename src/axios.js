import axios from "axios";

const instance = axios.create({
    baseURL: "https://us-central1-challenge-b06b5.cloudfunctions.net/api"
});

export default instance;