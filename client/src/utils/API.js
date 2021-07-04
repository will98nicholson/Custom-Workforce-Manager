import axios from "axios";

export default {
    getJob: function () {
        return axios.get("/api/jobs")
    },

    //post data from CreateJob.js to api/jobs
    createJob: function (jobData) {
        return axios.post("/api/jobs", jobData, {
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            }
        })
    },
    //get services for display in selector menu
    getServices: function () {
        return axios.get("/api/services")
    },
    //post selected services to purchased.db
    postPurchase: function (purchaseData) {
        return axios.post("/api/purchased", purchaseData)
    }
}
