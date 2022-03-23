class ApiFormatter {


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