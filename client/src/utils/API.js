import axios from "axios";

export default {
    getCurrentUser: function () {
        return axios.get("/api/user/current/")
    },
    getJobs: function () {
        return axios.get("/api/jobs/")
    },
    //
    getJobByUser: function (user) {
        return axios.get("/api/jobs/" + user)
    },

    getJobById: function (id) {
        return axios.get("/api/jobs/" + id)
    },

    //post data from CreateJob.js to api/jobs
    createJob: function (jobData) {
        return axios.post("/api/jobs", jobData)
    },
    //update job with complete status, notes, etc.
    updateJob: function (id, jobData) {
        return axios.put("/api/jobs" + id, jobData)
    },
    //get services for display in selector menu
    getServices: function () {
        return axios.get("/api/services")
    },
    //post selected services to purchased.db
    postPurchase: function (purchaseData) {
        return axios.post("/api/purchases", purchaseData)
    },
    getPurchases: function (purchases) {
        return axios.get('/api/purchases', purchases)
    }
}
