import axios from "axios"
import ApiFormatter from "./ApiFormatter.js";

class ApiProvider {
    constructor() {
        this.mainUrl = "http://localhost:3000"
    }

    async getMainUserData(id) {
        let data = {};
        let url = `${this.mainUrl}/user/${id}`;

        await axios.get(url)
        .then(function (response) {
            data = ApiFormatter.getMainDataFormat(response);
        })
        return data;
    }

    async getUserActivityData(id) {
        let data = {}
        let url = `${this.mainUrl}/user/${id}/activity`

        await axios.get(url)
        .then (function (response) {
            data = response
        })
        return data
    }

    async getUserAverageSessionData(id) {
        let data = {}
        let url = `${this.mainUrl}/user/${id}/average-sessions`

        await axios.get(url)
        .then (function (response ) {
            data = response
        })
        
        return data
    }

    async getUserPerformance(id) {
        let data = {}
        let url = `${this.mainUrl}/user/${id}/performance`
        
        await axios.get(url)
        .then ( function (response) {
            data = response
        })
        return data
    }
}

export default ApiProvider