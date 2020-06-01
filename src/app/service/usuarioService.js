import ApiService from '../apiservise'

class UsuarioService extends ApiService {

    constructor(){
        super('/api/usuarios')
    }

    autenticar(credencias){
        return this.post('/autenticar', credencias)
    }

    obterSaldoPorUsuario(id){
        return this.get(`/${id}/saldo`)
    }

}

export default UsuarioService;