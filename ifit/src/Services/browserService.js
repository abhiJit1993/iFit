
const browserService = {
    
    setCookies: (key, value) => {
        localStorage.setItem(key, value)
    },

    getCookies: (key) => {
        return localStorage.getItem(key)
    }
}

export default browserService;