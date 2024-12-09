import apiService from "./apiServices";
const authAPIService = {



    validateLogin: (user) => {

        return new Promise((resolve, reject) => {
        
            apiService.get('auth/login', { user  })
                .then(response => {
                    resolve(response.data)
                })
                .catch(error => reject(error));
        })
    }
}


export default authAPIService