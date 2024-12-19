import apiService from "./apiServices";
const authAPIService = {



    validateLogin: (userCreds) => {
console.log(userCreds)
        return new Promise((resolve, reject) => {
        
            apiService.get('auth/login', { email: userCreds.email, password: userCreds.password  })
                .then(response => {
                    resolve(response.data)
                })
                .catch(error => reject(error));
        })
    }
}


export default authAPIService