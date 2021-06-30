import axios from "axios";

export default {
    //gets current user for use in Admin verification
    getUser: function () {
        return axios.get("/api/user/current")
    },
    getJob: function () {
        return axios.get("/api/job")
    }
}