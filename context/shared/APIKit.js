import axios from "axios"



export const initializeAxios = () => {
    axios.defaults.baseURL = "https://us-central1-meme-creator-4d5d3.cloudfunctions.net/api"
}
