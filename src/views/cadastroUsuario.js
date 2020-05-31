import React from 'react'

import Card from '../components/card'
import FormGroup from '../components/form-group'
import {withRouter} from 'react-router-dom'

class CadastroUsuario extends React.Component {
    
    state = {
    nome : '',
    email: '',
    senha : '',
    sengaRepeticao : ''
}

 cadastrar = () =>{
     console.log(this.state)
 }

 cancelar = () => {
     this.props.history.push('/login')
 }
    render(){
        return(
            <Card title ="Cadastro de Usuario">
            <div className="row">
                <div className ="col-lg-12">
                    <div className="bs-component" >
                    <FormGroup label ="Nome: *" htmlFor="inputNome">
                            <input type="text"
                              id="inputNome"
                              className="form-control"
                              name="nome"
                              onChange={e => this.setState({nome: e.target.value})} />
                        </FormGroup>
                        <FormGroup label ="Email: *" htmlFor="inputEmail">
                            <input type="text"
                              id="inputEmail"
                              className="form-control"
                              name="email"
                              onChange={e => this.setState({email: e.target.value})} />
                        </FormGroup>
                        <FormGroup label="Senha: *" htmlFor="inputSenha">
                            <input type="password"
                             id="inputSenha"
                             className="form-control"
                             name="senha"
                             onChange={e => this.setState({senha: e.target.value}) } />
                        </FormGroup>
                        <FormGroup label="SenhaRepedido: *" htmlFor="inputSenhaRepetido">
                            <input type="password"
                             id="inputSenhaRepetido"
                             className="form-control"
                             name="senhaRepetido"
                             onChange={e => this.setState({sengaRepeticao: e.target.value})} />
                        </FormGroup>
                        <button onClick= {this.cadastrar} className ="btn btn-success"> Salvar</button>
                        <button onClick={this.cancelar} className ="btn btn-danger">Cancelar</button>
                </div>
                   </div>
             </div>
            </Card>
        )
    }
}

export default withRouter(CadastroUsuario)

 