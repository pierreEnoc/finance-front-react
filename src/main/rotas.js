import React from 'react'

import Login from '../views/login'
import Home from '../views/home'
import CadastroUsuario from '../views/cadastroUsuario'
import ConsultaLancamentos from '../views/lancamentos/consulta-lancamento'
import  CadastroLancamentos from '../views/lancamentos/cadastro-lancamentos'

import { Route, Switch, HashRouter, Redirect} from 'react-router-dom'


const isUsuarioAutenticado = () => {
    return false;
}

function RotaAutenticada({component: Component, ...props}){
    return (
        <Route {...props} render={ (componentProps) =>{
            if(isUsuarioAutenticado()){
                return (
                    <Component {...componentProps} />
                )
            }else {
                return (
                    <Redirect to = {{pathname : '/login', state : { from: componentProps.location }}}  /> 
                )
            }

        } }/>
    )
}

function Rotas(){
    return(
        <HashRouter>
            <Switch>
                <RotaAutenticada path ="/home" component={Home} />  
                <Route path ="/login" component={Login} />

                <Route path ="/cadastroUsuario" component={CadastroUsuario} />
                <RotaAutenticada path ="/consulta-lancamentos" component={ConsultaLancamentos} />
                <RotaAutenticada path ="/cadastro-lancamentos/:id?" component={CadastroLancamentos} />
            </Switch>
        </HashRouter>
    )
}

export default Rotas