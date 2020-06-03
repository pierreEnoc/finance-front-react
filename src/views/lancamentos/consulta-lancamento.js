import React from 'react'
import {withRouter} from 'react-router-dom'
import Card from '../../components/card'
import FormGroup from '../../components/form-group'
import SelectMenu from '../../components/selectMenu'
import LancamentosTable from './lancamentosTable'
import LancamentoService from '../../app/service/lancamentoService'
import LocalStorageService from '../../app/service/localstorageService'
import * as messages from '../../components/toastr'


class ConsultaLancamentos extends React.Component {

    state = {
        ano: '',
        mes: '',
        tipo: '',
        descricao: '',
        lancamentos: []
    }

    constructor(){
        super();
        this.service = new LancamentoService()
    }

    buscar = () => {
       if(!this.state.ano ){
           messages.mensagemErro('O preenchimento do campo Ano é obrigatoro.')

            return false;
       }

        const usuarioLogado = LocalStorageService.obterItem('_usuario_logado')

        const lancamentoFiltro = {
            ano: this.state.ano,
            mes: this.state.mes,
            tipo: this.state.tipo,
            descricao: this.state.descricao,
            usuario: usuarioLogado.id
        }

        this.service
            .consultar(lancamentoFiltro)
            .then(resposta => {
                this.setState({lancamentos: resposta.data})
            }).catch(Error => {
                console.log(Error)
            })
    }

    ediatr = (id) => {
        console.log('editando lancamento', id)
    }

    deletar = (id) => {
        console.log('deletar lancamento', id)
    }

    render(){
        const meses  = this.service.obterListaMeses();
        const tipos =  this.service.obterListaTipos();
    
        return(
            <Card title= "Consulta Lancamentos">
                <div className="row">
                    <div className="col-md-6">
                        <div className ="bs-component">

                            <FormGroup htmlFor = "inputAno" label ="Ano: *">
                         <input type="text" 
                            className="form-control" 
                            id="inputAno"
                            value={this.state.ano}
                            onChange={e => this.setState({ano: e.target.value})}
                            placeholder="Digite o Ano" />
                            
                            </FormGroup>

                            <FormGroup htmlFor = "inputAno" label ="Mês: ">
                                <SelectMenu
                                 id="inputMes" 
                                 value={this.state.mes}
                                 onChange={e => this.setState({mes: e.target.value })}
                                 className ="form-control" 
                                 lista={meses} />
                            </FormGroup>
                            <FormGroup htmlFor = "inputDescricao" label ="Descricao: ">
                         <input type="text" 
                            className="form-control" 
                            id="inputDescricao"
                            value={this.state.descricao}
                            onChange={e => this.setState({descricao: e.target.value})}
                            placeholder="Digite a descricaão" />
                            
                            </FormGroup>
                            
                            <FormGroup htmlFor = "inputTopo" label ="Tipo Lancamento">
                                <SelectMenu 
                                id="inputTipo" 
                                value={this.state.tipo}
                                onChange={e => this.setState({tipo: e.target.value })}
                                className ="form-control" 
                                lista={tipos} />
                            </FormGroup>
                            <button onClick ={this.buscar} type="button" className="btn btn-success">Buscar</button>
                            <button type="button" className="btn btn-danger">Cadastrar</button>
                        </div>
                    </div>
                </div>
                 <br />
                <div className="row">
                <div className="col-md-12">
                <div className="bs-component">
                    <LancamentosTable lancamentos={this.state.lancamentos } 
                                        deletAction={this.deletar} 
                                        editAction={this.ediatr}/>
                </div>
              </div>
             </div>

            </Card>

        )
    }

}

export default withRouter (ConsultaLancamentos);