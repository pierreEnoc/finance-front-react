import ApiService from '../apiservise'

class UsuarioService extends ApiService {

    constructor(){
        super('/api/usuarios')
    }

}

export default UsuarioService;