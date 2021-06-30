import axios from "axios";

export default {
    //gets current user for use in Admin verification
    getUser: function() {
        return axios.get("/auth/user")
    },
}