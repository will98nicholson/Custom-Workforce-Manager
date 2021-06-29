import axios from "axios";

export default {
    //gets current user for use in Admin verification
    getUser: function() {
        return axios.get("/api/user")
    },
    login: function() {
        return axios.post("/auth/login")
    }
}