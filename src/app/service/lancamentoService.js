import ApiService from '../apiservise'

export default class LancamentoService extends ApiService {

    constructor(){
        super('/api/lancamentos')

    }

    consular (lancamentoFiltro){
        let params = `?ano${lancamentoFiltro.ano}`

        if (lancamentoFiltro.mes){
            params =`${params}&mes=${lancamentoFiltro.mes}`
        }

        if(lancamentoFiltro.tipo){
            params =`${params}&tipo=${lancamentoFiltro.tipo}`
        }

        if(lancamentoFiltro.status){
            params =`${params}&status=${lancamentoFiltro.status}`
        }


        return this.get(params)
    }

}

