import apiService from "./apiServices";
const planAPIService = {



    getPlans: (id) => {

        return new Promise((resolve, reject) => {
            let url = "getPlans"
            apiService.get(url, { planId: id !== undefined ? id : '*' })
                .then(response => {
                    resolve(response.data.plans)
                })
                .catch(error => reject(error));
        })
    }
}


export default planAPIService