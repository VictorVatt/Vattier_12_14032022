class ApiFormatter {

    /**
     * Retrieve User Main Data and return formatted Data
     * @param {Object} dataApi - Data fetcher from the ApiProvider 
     * @returns {Object} - Formatted data used by the component
     */
    static getMainDataFormat(dataApi) {
        let fetchedData = dataApi.data.data
        
        return {
            firstName: fetchedData.userInfos.firstName,
            keyData: fetchedData.keyData,
            score: fetchedData.score || fetchedData.todayScore,
        }
    }








}

export default ApiFormatter