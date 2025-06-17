import axios from "../lib/axios.js";

export const getUser = async () => {
    try {
        const response = await axios.get(`/auth/user`); // either we can directly take data out from response or do response.data.user  as inside response data will be present
        // console.log(response.data.user);
        return response.data.user;

    } catch (error) {
        // console.log(error.response.data.message);
    } 
};
