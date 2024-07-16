import axios from "axios";

export const createApiInstance = () => { 

    return axios.create({
		baseURL: "https://66939610c6be000fa07c73fb.mockapi.io/api/f/"
    })
};

export let API = createApiInstance();