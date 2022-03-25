import axios from "axios"
import ApiFormatter from "./ApiFormatter.js";

class ApiProvider {
    constructor() {
        this.mainUrl = "http://localhost:3000"
    }
    /**
     * Fetched Main User Data from API
     * @param {string} id - user id
     * @returns {Object} data
     */
    async getMainUserData(id) {
        let data = {};
        let url = `${this.mainUrl}/user/${id}`;

        await axios.get(url)
        .then(function (response) {
            data = ApiFormatter.getMainDataFormat(response);
        })
        return data;
    }
    /**
     * Fetched User Activity Data from API
     * @param {string} id - user id
     * @returns {Object} data
     */
    async getUserActivityData(id) {
        let data = {}
        let url = `${this.mainUrl}/user/${id}/activity`

        await axios.get(url)
        .then (function (response) {
            data = response
        })
        return data
    }
    /**
     * Fetched User Average Session Data from API
     * @param {string} id - user id
     * @returns {Object} data
     */
    async getUserAverageSessionData(id) {
        let data = {}
        let url = `${this.mainUrl}/user/${id}/average-sessions`

        await axios.get(url)
        .then (function (response ) {
            data = response
        })
        
        return data
    }
    /**
     * Fetched User Performance from API
     * @param {string} id - user id
     * @returns {Object} data
     */
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