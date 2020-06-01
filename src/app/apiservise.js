import axios from 'axios'

const httCliente = axios.create({
    baseURL: 'http://localhost:8080'
})

class ApiService {
    constructor(apiurl){
        this.apiurl = apiurl;
    }

    post(url, objeto){
        return httCliente.post(url, objeto);
    }

    put(url, objeto){
        return httCliente.put(url, objeto);
    }

    delete(url){
        return httCliente.delete(url)
    }

    get(url, objeto){
        return httCliente.get(url)
    }
}

export default ApiService;
