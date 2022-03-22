import axios from "axios"
import ApiFormatter from "./ApiFormatter.js";

class ApiProvider {
    constructor() {
        this.mainUrl = "http://localhost:3000"
    }

    async getMainData(id) {
        let data = {};
        let url = `${this.mainUrl}/user/${id}`;

        await axios.get(url)
        .then(function (response) {
            data = ApiFormatter.getMainDataFormat(response);
            console.log(data)
        })
        return data;
    }
}

export default ApiProvider