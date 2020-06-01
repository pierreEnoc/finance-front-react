import axios from 'axios'

const httCliente = axios.create({
    baseURL: 'http://localhost:8080'
})

class ApiService {
    constructor(apiurl){
        this.apiurl = apiurl;
    }

    post(url, objeto){
        const requestUrl = `${this.apiurl}${url}`
        return httCliente.post(requestUrl, objeto);
    }

    put(url, objeto){
        const requestUrl = `${this.apiurl}${url}`
        return httCliente.put(requestUrl, objeto);
    }

    delete(url){
        const requestUrl = `${this.apiurl}${url}`
        return httCliente.delete(requestUrl)
    }

    get(url, objeto){
        const requestUrl = `${this.apiurl}${url}`
        return httCliente.get(requestUrl)
    }
}

export default ApiService;
